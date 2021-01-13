<template>
  <div>
    <div id="content-block">
      <Header />
      <News />
      <Footer />
    </div>
    <Popup />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";
import Slider from "@/components/layouts/Slider";
import News from "@/components/News";
import Footer from "@/components/layouts/Footer";
import Popup from "@/components/layouts/Popup";

export default {
  components: {
    Header,
    Slider,
    News,
    Footer,
    Popup,
  },
};
</script>
