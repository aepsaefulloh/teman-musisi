<template>
  <div>
    <div id="content-block">
      <Header />
      <Slider />
      <Index />
      <Footer />
    </div>
    <Popup />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";
import Slider from "@/components/layouts/Slider";
import Index from "@/components/Index";
import Footer from "@/components/layouts/Footer";
import Popup from "@/components/layouts/Popup";

export default {
  components: {
    Header,
    Slider,
    Index,
    Footer,
    Popup,
  },
};
</script>
