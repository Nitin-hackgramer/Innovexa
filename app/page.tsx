import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import GroupsSection from '@/components/groups-section';
import ActivityFeedSection from '@/components/activity-feed-section';
import HowItWorksSection from '@/components/how-it-works-section';
import MemberSpotlightSection from '@/components/member-spotlight-section';
import ResourcesSection from '@/components/resources-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <GroupsSection />
      <ActivityFeedSection />
      <HowItWorksSection />
      <MemberSpotlightSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}