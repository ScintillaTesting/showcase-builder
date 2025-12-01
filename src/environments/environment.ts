export const environment = {
  mode: '📽️ Production Environment',
  based(url: string) {
    console.log('debug: returning:',`/showcase-builder${url}`)
    return `/showcase-builder${url}`
  },
}
