# 🎓 CourseConvert – The Ultimate Landing Page for Online Courses

**CourseConvert** is a premium, high-converting landing page template built specifically for educators, creators, and coaches who want to sell their courses online. Whether you're launching a cohort-based course, self-paced program, or workshop, CourseConvert helps you turn visitor curiosity into student enrollments with its conversion-optimized design.

👉 **[Live Demo](https://courseconvert.pages.dev/)** | **[Purchase Now](https://mrshade.gumroad.com/l/CourseConvert)**

![CourseConvert Preview](https://via.placeholder.com/1200x630?text=CourseConvert+Landing+Page)

## ✨ Why Choose CourseConvert?

- **Conversion-Focused Design**: Every element is strategically placed to guide visitors toward enrollment
- **Modular Components**: Mix and match sections to create your perfect landing page
- **Mobile-First Approach**: Looks stunning on all devices from mobile to desktop
- **Performance Optimized**: Fast loading times for better user experience and SEO
- **Easy Customization**: Simple to adapt to your brand with Tailwind CSS
- **Modern Animations**: Subtle, engaging animations with Framer Motion
- **SEO Ready**: Built with best practices for search engine visibility

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/courseconvert.git

# Navigate to the project directory
cd courseconvert

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` (or the port shown in your terminal) to see the landing page in action.

## 🌟 Features & Components

### Core Components

* **Navbar**: Responsive navigation with mobile menu and CTA button
* **Hero Section**: Eye-catching headline, course summary, and primary CTA
* **Features**: Showcase the key benefits of your course
* **Curriculum**: Expandable modules to preview course content
* **Course Preview**: Video previews and sample lessons
* **Instructor Profiles**: Highlight course creators and their expertise
* **Success Stories**: Real results from past students
* **Testimonials**: Social proof from satisfied customers
* **Pricing Table**: Clear pricing options with feature comparison
* **Countdown Timer**: Create urgency with limited-time offers
* **FAQ Section**: Address common questions and objections
* **Newsletter**: Email capture for marketing and lead generation
* **CTA Section**: Final conversion opportunity
* **Footer**: Navigation, links, and additional information

### Advanced Features

* **Interactive Elements**: Hover effects, animations, and micro-interactions
* **Responsive Design**: Optimized for all screen sizes
* **Dark/Light Mode**: Support for user preference (coming soon)
* **Accessibility**: WCAG compliant for all users
* **Performance Optimized**: Lazy loading, code splitting, and optimized assets
* **SEO Ready**: Proper semantic HTML and meta tags

## 📁 Project Structure

```
CourseConvert/
│
├── public/               # Static assets
│
├── src/
│   ├── assets/           # Images, fonts, and other assets
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Curriculum.jsx
│   │   ├── CoursePreview.jsx
│   │   ├── Instructor.jsx
│   │   ├── SuccessStories.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ComparisonTable.jsx
│   │   ├── Pricing.jsx
│   │   ├── CountdownTimer.jsx
│   │   ├── FAQ.jsx
│   │   ├── Newsletter.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   ├── index.css         # Global styles
│   └── App.css           # Component-specific styles
│
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## 🛠️ Tech Stack

* **React.js**: UI library for building component-based interfaces
* **Tailwind CSS**: Utility-first CSS framework for rapid styling
* **Framer Motion**: Animation library for React
* **React Icons**: Icon library with popular icon sets
* **Vite**: Next-generation frontend tooling

## 🎨 Customization

### Changing Colors

Edit the `tailwind.config.js` file to update the color palette:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color palette
      },
      secondary: {
        // Your secondary color palette
      },
    },
  },
},
```

### Adding New Sections

1. Create a new component in the `src/components` directory
2. Import and add the component to `App.jsx`
3. Style using Tailwind CSS classes

## 🧠 Use Cases

* **Course Creators**: Launch and sell online courses with high conversion rates
* **Coaches & Consultants**: Promote coaching programs and workshops
* **Educational Institutions**: Market specialized programs and certifications
* **Membership Sites**: Convert visitors into members for recurring revenue
* **Digital Product Creators**: Sell digital products with an optimized sales page

## 📱 Responsive Design

CourseConvert is built with a mobile-first approach, ensuring your landing page looks great on:

- Mobile phones (portrait and landscape)
- Tablets
- Laptops and desktops
- Large displays

## 🛒 Licensing Options

* **Creator License**: $12 - Use on a single domain
* **Team License**: $39 - Use on up to 5 domains
* **Unlimited License**: $69 - Unlimited domains and client projects

👉 **[Purchase Now on Gumroad](https://mrshade.gumroad.com/l/CourseConvert)**

## 🤝 Support & Community

- [Documentation](https://example.com/docs)
- [Discord Community](https://example.com/discord)
- [Email Support](mailto:support@example.com)

## 🔧 Troubleshooting

### Tailwind CSS Not Working

If Tailwind CSS styles are not being applied, try the following steps:

1. **Check PostCSS Configuration**: Make sure you have a `postcss.config.js` file in your project root with the following content:
   ```js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

2. **Verify Tailwind Directives**: Ensure your CSS file includes the necessary Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. **Content Configuration**: Make sure your `tailwind.config.js` file has the correct content paths:
   ```js
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   ```

4. **Restart Development Server**: Stop and restart your development server:
   ```bash
   npm run dev
   ```

5. **Clear Cache**: Try clearing your browser cache or using incognito mode to test.

## 📈 Roadmap

- [ ] Dark/Light mode toggle
- [ ] Additional page templates (About, Contact, etc.)
- [ ] Integration with popular course platforms (Teachable, Thinkific, etc.)
- [ ] More animation options
- [ ] Additional pricing table layouts

## 📄 License

This project is licensed under the [MIT License](LICENSE)

---

Made with ❤️ by [Your Company/Name]
