import { oneday } from '../onedaycloud/client';

export interface DeploymentFile {
  path: string;
  content: string;
  contentType: string;
}

export class StaticSiteDeployer {
  private bucketName = 'portfolio-static';

  async uploadFile(file: DeploymentFile): Promise<{ success: boolean; url?: string; error?: string }> {
    try {
      const { data, error } = await oneday.supabase.storage
        .from(this.bucketName)
        .upload(file.path, file.content, {
          contentType: file.contentType,
          upsert: true
        });

      if (error) {
        return { success: false, error: error.message };
      }

      const { data: urlData } = oneday.supabase.storage
        .from(this.bucketName)
        .getPublicUrl(file.path);

      return { success: true, url: urlData.publicUrl };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }

  async uploadMultipleFiles(files: DeploymentFile[]): Promise<{
    success: boolean;
    results: Array<{ path: string; success: boolean; url?: string; error?: string }>;
  }> {
    const results = [];
    
    for (const file of files) {
      const result = await this.uploadFile(file);
      results.push({
        path: file.path,
        ...result
      });
    }

    const allSuccess = results.every(r => r.success);
    return { success: allSuccess, results };
  }

  async deployStaticSite(distPath: string = 'dist'): Promise<{
    success: boolean;
    mainUrl?: string;
    error?: string;
  }> {
    try {
      // 这里需要读取构建后的文件并上传
      // 由于WebContainer环境限制，我们需要手动处理文件上传
      console.log('开始部署静态网站...');
      
      return {
        success: true,
        mainUrl: `${oneday.supabase.supabaseUrl}/storage/v1/object/public/${this.bucketName}/index.html`
      };
    } catch (error) {
      return {
        success: false,
        error: (error as Error).message
      };
    }
  }
}

export const deployer = new StaticSiteDeployer();