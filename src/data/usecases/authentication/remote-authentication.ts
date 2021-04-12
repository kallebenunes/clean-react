import HttpPostClient from '@/data/protocols/http/http-post-client'

export default class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httoPostClient: HttpPostClient
  ) {}

  async auth (): Promise<void> {
    await this.httoPostClient.post(this.url)
  }
}
