export default {
  logo: <span>PMP</span>,
  project: {
    link: 'https://github.com/wangleihd/pmp',
  },
	navigation: {
    prev: true,
    next: true
  },
	head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
  footer: {
    text: <span>
      MIT 2018 - {new Date().getFullYear()} © <a href="https://leix.wang" target="_blank">Leix.Wang</a>.
    </span>,
  }
}
