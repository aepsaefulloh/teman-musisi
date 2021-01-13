<template>
  <div>
    <div id="content-block">
      <Header />
      <Contact />
      <Footer />
    </div>
    <Popup />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";
import Slider from "@/components/layouts/Slider";
import Contact from "@/components/Contact";
import Footer from "@/components/layouts/Footer";
import Popup from "@/components/layouts/Popup";

export default {
  components: {
    Header,
    Slider,
    Contact,
    Footer,
    Popup,
  },
};
</script>
