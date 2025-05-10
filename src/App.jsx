import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Curriculum from './components/Curriculum'
import CoursePreview from './components/CoursePreview'
import Instructor from './components/Instructor'
import SuccessStories from './components/SuccessStories'
import Testimonials from './components/Testimonials'
import ComparisonTable from './components/ComparisonTable'
import Pricing from './components/Pricing'
import CountdownTimer from './components/CountdownTimer'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  // Set countdown date to 7 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <CoursePreview />
        <CountdownTimer
          targetDate={targetDate}
          title="Special Launch Discount Ends Soon"
          subtitle="Enroll now to save 50% off the regular price!"
        />
        <Instructor />
        <SuccessStories />
        <Testimonials />
        <ComparisonTable />
        <Pricing />
        <Newsletter />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
