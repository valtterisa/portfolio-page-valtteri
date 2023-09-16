import HeroSection from '@/components/HeroSection'
import HomepageWork from '@/components/HomepageWork'
import WhyToBuy from '@/components/WhyToBuy'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WhyToBuy />
      <HomepageWork />
    </main>
  )
}
