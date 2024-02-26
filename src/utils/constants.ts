export interface cards_props {
  id: number;
  image: string;
  title: string;
  categories: string[];
  description: string;
  link: string;
  keywords?: string[];
}

export const cards: cards_props[] = [
  {
    id: 1,
    image: '/assets/images/categories/colors/Color Hunt.webp',
    title: 'Color Hunt',
    categories: ['colors', 'popular'],
    description:
      'Collection of color palettes for designers and artists, featuring filters by popularity, color, recent, etc.',
    link: 'https://colorhunt.co/',
    keywords: ['color', 'css'],
  },
  {
    id: 2,
    image: '/assets/images/categories/colors/UI Colors.webp',
    title: 'UI Colors',
    categories: ['colors'],
    description:
      'Color palette generator for TailwindCSS, featuring usage examples in images, banners, buttons, etc.',
    link: 'https://uicolors.app/create',
    keywords: ['color', 'css'],
  },
  {
    id: 3,
    image: '/assets/images/categories/colors/Tints.webp',
    title: 'Tints',
    categories: ['colors'],
    description:
      'Color palette generator and API for TailwindCSS, where you can customize hue, saturation, brightness, etc.',
    link: 'https://www.tints.dev/',
    keywords: ['color', 'css'],
  },
  {
    id: 4,
    image: '/assets/images/categories/colors/Happy Hues.webp',
    title: 'Happy Hues',
    categories: ['colors'],
    description:
      'Collection of color palettes, curiously explaining the psychology of each color to determine its use.',
    link: 'https://www.happyhues.co/',
    keywords: ['color', 'css'],
  },
  {
    id: 5,
    image: '/assets/images/categories/colors/Siege Media.webp',
    title: 'Siege Media',
    categories: ['colors'],
    description:
      'Tool to easily calculate the contrast ratio between a background color and a text color.',
    link: 'https://www.siegemedia.com/contrast-ratio',
    keywords: ['color', 'contrast', 'css'],
  },
  {
    id: 6,
    image: '/assets/images/categories/colors/Color Review.webp',
    title: 'Color Review',
    categories: ['colors'],
    description:
      'Explore and find accessible colors by comparing the contrast between a background color and a text color.',
    link: 'https://color.review/',
    keywords: ['color', 'contrast', 'css'],
  },
  {
    id: 7,
    image: '/assets/images/categories/components/Keep.webp',
    title: 'Keep',
    categories: ['components'],
    description:
      'Explore over 40 React components and interactive elements, designed with TailwindCSS.',
    link: 'https://react.keepdesign.io/',
    keywords: ['react', 'component', 'tailwind'],
  },
  {
    id: 8,
    image: '/assets/images/categories/components/Next UI.webp',
    title: 'Next UI',
    categories: ['components', 'popular'],
    description:
      'Modern React component library built with TailwindCSS, featuring automatic light/dark mode recognition.',
    link: 'https://nextui.org/',
    keywords: ['react', 'component', 'tailwind', 'javascript'],
  },
  {
    id: 9,
    image: '/assets/images/categories/components/Tremor.webp',
    title: 'Tremor',
    categories: ['components'],
    description:
      'Collection of modern React components built with TailwindCSS, focused on graphics and statistics.',
    link: 'https://www.tremor.so/components',
    keywords: ['react', 'component', 'tailwind'],
  },
  {
    id: 10,
    image: '/assets/images/categories/components/Flowbite.webp',
    title: 'Flowbite',
    categories: ['components'],
    description:
      'Extensive collection of over 63 components made with TailwindCSS for React, Angular, Vue, etc.',
    link: 'https://flowbite.com/#components',
    keywords: ['react', 'component', 'tailwind', 'angular', 'vue'],
  },
  {
    id: 11,
    image: '/assets/images/categories/components/Wicked Blocks.webp',
    title: 'Wicked Blocks',
    categories: ['components'],
    description:
      'A collection of over 120 HTML components and blocks for TailwindCSS, fully responsive.',
    link: 'https://wickedblocks.dev/',
    keywords: ['HTML', 'component', 'tailwind', 'javascript'],
  },
  {
    id: 12,
    image: '/assets/images/categories/components/Headless UI.webp',
    title: 'Headless UI',
    categories: ['components'],
    description:
      'Fully accessible UI components for React and Vue, designed to integrate with Tailwind CSS.',
    link: 'https://headlessui.com/',
    keywords: ['react', 'component', 'tailwind', 'vue', 'javascript'],
  },
  {
    id: 13,
    image: '/assets/images/categories/deploys/Vercel.webp',
    title: 'Vercel',
    categories: ['deploy', 'popular'],
    description:
      'Deploy your front-end and back-end projects, projects are automatically updated when the linked Github repository is updated.',
    link: 'https://vercel.com/',
    keywords: ['deploy', 'frontend', 'backend', 'javascript'],
  },
  {
    id: 14,
    image: '/assets/images/categories/deploys/Render.webp',
    title: 'Render',
    categories: ['deploy'],
    description:
      'Deploy your front-end and back-end projects, you can also create a free database per account.',
    link: 'https://render.com/',
    keywords: ['deploy', 'frontend', 'backend'],
  },
  {
    id: 15,
    image: '/assets/images/categories/deploys/Netlify.webp',
    title: 'Netlify',
    categories: ['deploy'],
    description:
      'Deploy your front-end projects, simply drag the root folder of your project to deploy easily.',
    link: 'https://app.netlify.com/drop',
    keywords: ['deploy', 'frontend'],
  },
  {
    id: 16,
    image: '/assets/images/categories/deploys/Fl0.webp',
    title: 'Fl0',
    categories: ['deploy'],
    description:
      'Deploy your back-end projects, you can also create a free database per account.',
    link: 'https://www.fl0.com/',
    keywords: ['deploy', 'backend'],
  },
  {
    id: 17,
    image: '/assets/images/categories/forms/Formik.webp',
    title: 'Formik',
    categories: ['forms'],
    description:
      'Build efficient, declarative, intuitive, and adaptable React-based forms.',
    link: 'https://formik.org/',
    keywords: ['form', 'react', 'javascript'],
  },
  {
    id: 18,
    image: '/assets/images/categories/forms/React Hook Form.webp',
    title: 'React Hook Form',
    categories: ['forms', 'popular'],
    description:
      'Efficient, flexible, and extensible React-based forms with easy-to-use validation.',
    link: 'https://react-hook-form.com/',
    keywords: ['form', 'react', 'javascript'],
  },
  {
    id: 19,
    image: '/assets/images/categories/forms/Tally.webp',
    title: 'Tally',
    categories: ['forms'],
    description:
      'Forms adaptable to any environment, flexible, and extensible with validation.',
    link: 'https://tally.so/',
    keywords: ['form'],
  },
  {
    id: 20,
    image: '/assets/images/categories/fonts/Fontsource.webp',
    title: 'Fontsource',
    categories: ['fonts', 'popular'],
    description:
      'Collection of over 1600 fonts, which can be downloaded or installed in your favorite code editor.',
    link: 'https://fontsource.org/',
    keywords: ['font', 'html', 'css'],
  },
  {
    id: 21,
    image: '/assets/images/categories/fonts/Fontshare.webp',
    title: 'Fontshare',
    categories: ['fonts'],
    description:
      'Collection of fonts uploaded by the community, includes a section for font pairing.',
    link: 'https://www.fontshare.com/',
    keywords: ['font', 'html', 'css'],
  },
  {
    id: 22,
    image: '/assets/images/categories/fonts/Google Fonts.webp',
    title: 'Google Fonts',
    categories: ['fonts'],
    description:
      'Collection of over 1500 fonts, which can be downloaded or installed in your favorite code editor.',
    link: 'https://fonts.google.com/',
    keywords: ['font', 'html', 'css'],
  },
  {
    id: 23,
    image: '/assets/images/categories/fonts/Fontpair.webp',
    title: 'Fontpair',
    categories: ['fonts'],
    description:
      'Free fonts and font combinations to use in your next design project.',
    link: 'https://www.fontpair.co/',
    keywords: ['font', 'html', 'css'],
  },
  {
    id: 24,
    image: '/assets/images/categories/icons/Tabler Icons.webp',
    title: 'Tabler Icons',
    categories: ['icons'],
    description:
      'Over 4900 pixel-perfect web icons, free and open-source, designed to make your website or application attractive.',
    link: 'https://tabler.io/icons',
    keywords: ['icons', 'html', 'css'],
  },
  {
    id: 25,
    image: '/assets/images/categories/icons/Font Awesome.webp',
    title: 'Font Awesome',
    categories: ['icons', 'popular'],
    description:
      'Library of over 30,000 icons and web design toolkit, free and open-source.',
    link: 'https://fontawesome.com/search',
    keywords: ['icons', 'html', 'css'],
  },
  {
    id: 26,
    image: '/assets/images/categories/icons/React Icons.webp',
    title: 'React Icons',
    categories: ['icons'],
    description:
      'Include popular icons in your React projects easily, uses ES6 imports.',
    link: 'https://react-icons.github.io/react-icons/',
    keywords: ['icons', 'react', 'html', 'css'],
  },
  {
    id: 27,
    image: '/assets/images/categories/icons/Box Icons.webp',
    title: 'Box Icons',
    categories: ['icons'],
    description:
      'High-quality open-source web icons carefully crafted for designers and developers.',
    link: 'https://boxicons.com/',
    keywords: ['icons', 'html', 'css'],
  },
  {
    id: 28,
    image: '/assets/images/categories/streamers/Midudev.webp',
    title: 'Midudev',
    categories: ['streamers', 'popular'],
    description:
      'Live streams on FullStack Development with JavaScript. Full streams and highlights of the best moments.',
    link: 'https://www.youtube.com/@midulive',
    keywords: ['streamers', 'javascript', 'typescript'],
  },
  {
    id: 29,
    image: '/assets/images/categories/streamers/Goncy.webp',
    title: 'Goncy',
    categories: ['streamers'],
    description:
      'FullStack development solutions, videos and live streams on interview simulations, integrations, etc.',
    link: 'https://www.youtube.com/@goncypozzo',
    keywords: ['streamers', 'javascript', 'typescript'],
  },
  {
    id: 30,
    image: '/assets/images/categories/streamers/MoureDev.webp',
    title: 'MoureDev',
    categories: ['streamers'],
    description:
      'Programming and software development tutorials. Learn to create Web, Android and iOS applications with Python, Kotlin, Swift and much more...',
    link: 'https://www.youtube.com/@mouredev',
    keywords: ['streamers', 'mobile', 'python'],
  },
  {
    id: 31,
    image: '/assets/images/categories/streamers/Hola Mundo.webp',
    title: 'Hola Mundo',
    categories: ['streamers'],
    description:
      'Programming and software development solutions, focused on JavaScript. Learn to create Web applications.',
    link: 'https://www.youtube.com/@HolaMundoDev',
    keywords: ['streamers', 'javascript'],
  },
  {
    id: 32,
    image: '/assets/images/categories/streamers/Programador X.webp',
    title: 'Programador X',
    categories: ['streamers'],
    description:
      'Tips and advice for web developers, videos on technical tests, tutorials, learning paths, etc.',
    link: 'https://www.youtube.com/@ProgramadorX',
    keywords: ['streamers', 'tutorial'],
  },
  {
    id: 33,
    image: '/assets/images/categories/streamers/Fazt.webp',
    title: 'Fazt',
    categories: ['streamers'],
    description:
      'Programming, Web development, and many other topics related to the world of computing in general. From learning the basics of a programming language to deploying your website or Web application.',
    link: 'https://www.youtube.com/@FaztTech',
    keywords: ['streamers', 'tutorial'],
  },
  {
    id: 34,
    image: '/assets/images/categories/streamers/freeCodeCamp.webp',
    title: 'freeCodeCamp',
    categories: ['streamers'],
    description:
      'Learn to code for free. Build Projects. Get Certifications. freeCodeCamp is a non-profit organization whose mission is to create free resources to help you learn to code.',
    link: 'https://www.youtube.com/@freecodecampespanol',
    keywords: ['streamers', 'freeCodeCamp'],
  },
  {
    id: 35,
    image: '/assets/images/categories/streamers/Vida MRR.webp',
    title: 'Vida MRR',
    categories: ['streamers'],
    description:
      'Channel for web design and development, where you can find content on Javascript, Bootstrap, TailwindCSS, Node.js, PHP and MySQL and more resources necessary to be the best web developer.',
    link: 'https://www.youtube.com/@vidamrr',
    keywords: ['streamers', 'javascript', 'tailwind', 'php'],
  },
  {
    id: 36,
    image: '/assets/images/categories/templates/HTML rev.webp',
    title: 'HTML rev',
    categories: ['templates'],
    description:
      'Free HTML, Bootstrap, and Tailwind templates for websites, landing pages, coming soon, blogs, portfolios, e-commerce, and dashboards.',
    link: 'https://htmlrev.com/?utm_source=public_apis',
    keywords: ['templates', 'html', 'css'],
  },
  {
    id: 37,
    image: '/assets/images/categories/templates/Frontendor.webp',
    title: 'Frontendor',
    categories: ['templates', 'popular'],
    description:
      'Reusable HTML templates and blocks to help you create beautiful and professional landing pages quickly and easily.',
    link: 'https://frontendor.com/',
    keywords: ['templates', 'html', 'css'],
  },
  {
    id: 38,
    image: '/assets/images/categories/templates/Theme Selection.webp',
    title: 'Theme Selection',
    categories: ['templates'],
    description:
      'Free admin panel template, selected HTML themes, and U kits, high-quality, modern, professional, and easy-to-use design create your app faster.',
    link: 'https://themeselection.com/',
    keywords: ['templates', 'html', 'css'],
  },
  {
    id: 39,
    image: '/assets/images/categories/templates/Canva.webp',
    title: 'Canva',
    categories: ['templates'],
    description:
      'Graphic design platform, used to create graphics, presentations, posters, documents, and other visual content for social media.',
    link: 'https://www.canva.com/',
    keywords: ['templates', 'html', 'css'],
  },
];
