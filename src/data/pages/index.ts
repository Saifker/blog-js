import {
  Body,
  ExternalLink,
  Footer,
  Header,
  HeroSmall,
  HorizontalLine,
  LogoIcon,
  Logo,
  Page,
  Paragraph,
  Title,
  Title2,
  NextLink
} from '../components'


export default {
  name: 'index',
  url: 'test',
  content: Page(
    Header(Logo()),
    Body(
      Title('Blog Port', 'center'),
      Paragraph(
        NextLink(
          [
            HeroSmall('static/teleport-sketch-plugin.png', 'teleportHQ Sketch plugin'),
            Title2('Hello! we’ve built a real-time Sketch-to-code engine (with live preview)')
          ],
          'how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview'
        ),
        HorizontalLine(),
        NextLink(
          Title2('Understanding The Web'),
          'understanding-the-web-parsing-web-pages-semantically'
        )
      ),
    ), 
    Footer(
      ExternalLink(LogoIcon('static/svg/teleport-icon.svg'), 'https://teleporthq.io'),
      ExternalLink(LogoIcon('static/svg/github-icon.svg'), 'https://github.com/teleporthq'),
      ExternalLink(LogoIcon('static/svg/twitter-icon.svg'), 'https://twitter.com/teleporthqio'),
    )
  )
}