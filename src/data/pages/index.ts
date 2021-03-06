import {
  Body,
  ExternalLink,
  Footer,
  Header,
  HeroSmall,
  Logo,
  Page,
  Title,
  Title2,
  Link,
  Navigation,
  NavigationItem,
  AuthorCard,
  Paragraph,
  FooterInfo,
  FooterRegister,
  FooterLinks,
  Title3,
  Button,
  Span,
  Image,
  Copy,
  SmallText,
  AuthorCardWrapper,
  Bold,
  HorizontalLine,
  InfoText,
} from '../components'
import br from '../elements/br'

export default {
  name: 'index',
  url: '/',
  content: Page(
    Header(
      Link(
        Logo(
          '/static/blog/assets/circle.svg',
          '/static/blog/assets/square.svg',
          '/static/blog/assets/triangle.svg',
          '/static/blog/assets/logowriting.svg'
        ),
        '/'
      ),
      Navigation(
        NavigationItem([Link('Home', '/')]),
        NavigationItem([Link('Vision', '/vision')]),
        NavigationItem([Link('About Us', '/about')]),
        NavigationItem([Link('Funding', '/funding')]),
        NavigationItem([Link('Blog', '/blog')], '#4a4a4a'),
        NavigationItem([Link(Button('Sign up'), '/sign-up')])
      )
    ),
    Body(
      Title('Blog Port', 'center', 600, '2em'),
      Title3("We'd like to share something with you", 'center', '1rem', '#959393', '-20px', '60px'),
      Link(
        HeroSmall('/static/blog/raul-blog-mini.png', 'teleportHQ people building'),
        '/blog/understanding-the-web-parsing-web-pages-semantically'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/raul.png',
          name: 'Raul Incze',
          twitterHandle: '@raulincze',
          twitterLink: 'https://twitter.com/@raulincze',
        }),
        Span('Posted on Jun 25'),
      ]),
      Link(
        [
          Title2('Understanding the Web: Parsing Web Pages Semantically'),
          SmallText(
            'Around two months ago I joined forces with the rest of the teleportHQ team in our mission to reduce friction and eliminate dead ends in the GUI building process, spawning a machine learning (ML) track.'
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/understanding-the-web-parsing-web-pages-semantically'
      ),
      HorizontalLine(),
      br,
      Link(
        HeroSmall('/static/blog/criss-blog-mini.png', 'teleportHQ Sketch plugin'),
        '/blog/how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/criss.jpeg',
          name: 'Criss Moldovan',
          twitterHandle: '@crissmoldovan',
          twitterLink: 'https://twitter.com/@crissmoldovan',
        }),
        Span('Posted on May 5'),
      ]),
      Link(
        [
          Title2('We’ve built a real-time Sketch-to-code engine'),
          SmallText(
            'About a year back, as I was working on a mobile app, I got myself stuck in a never ending ping-pong with my designer, mainly tweaking how the app looks and behaves. Most of these changes were only about positioning, colors, spacing ...'
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview'
      )
    ),
    InfoText([
      Paragraph(
        'Our blog’s code is automatically generated from a  ',
        ExternalLink('teleport project definition', 'https://teleporthq.io/static/blog/teleport.json'),
        '. The blog is open-source and you can learn more about how the technology works from our ',
        ExternalLink('github repo', 'https://github.com/teleporthq/blog'),
        '.'
      ),
    ]),
    Footer([
      FooterInfo([
        Image({ src: '/static/blog/assets/teleporthq-footer.svg', alt: 'teleport footer' }),
        Paragraph(
          'For information regarding other co-financed projects within European Union, please visit ',
          ExternalLink('www.fonduri-ue.ro', 'http://www.fonduri-ue.ro')
        ),
        Paragraph(
          "The content of this material does not necessary represent the oficial statement of the European Union or Romania's Government."
        ),
      ]),
      FooterRegister([
        Title3('Sounds good?', 'center', '1.3em'),
        Span('Register for our Private Alpha'),
        br,
        br,
        Link(Button([Span('SIGN UP')], 'inline-block'), '/sign-up'),
      ]),
      FooterLinks([
        Title3('Links', 'center', '1.1em'),
        Link(Span('About us'), '/about'),
        Link(Span('Funding'), '/funding'),
        Link(Span('Vision'), '/vision'),
      ]),
    ]),
    Copy([Span('Evo Forge, Calea Motilor nr 84, Cluj-Napoca &nbsp;&nbsp;&nbsp;&nbsp; Phone: +40 (0)364 101 203')])
  ),
}
