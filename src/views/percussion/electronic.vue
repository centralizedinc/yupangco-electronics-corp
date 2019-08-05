<template>
  <div style="padding: 20px;" align="middle">
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P89SPD30BK.jpg"
          slot="cover"
        />
        <a-card-meta title="Roland SPD-30 B">
          <template slot="description">₱39,950.00</template>
        </a-card-meta>
        <a-button @click="Click1" style="marginTop: 16px">{{sh1}}</a-button>
        <p v-show="desc1">DESCRIPTION</p>
        <p
          v-show="desc1"
        >The new Version 2 system upgrade expands the SPD-30’s onboard kit and phrase libraries, and add powerful new features and functions. Roland’s original Octapad profoundly changed the landscape of electronic percussion. The size of a briefcase, the Octapad offered drummers and percussionists the equivalent of an entire electronic rig in one self-contained unit — a new level of convenience and expression. Today, decades later, an exciting new chapter in Octapad history begins. The SPD-30 blends the world’s most essential sounds with the latest triggering technology in a road-tough package that’s ready for the most demanding performers.</p>
        <a-button :loading="loading1" @click="handleClick1" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10" :padding="20">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P89SPDSX.jpg"
          slot="cover"
        />
        <a-card-meta title="Roland SPD-SX">
          <template slot="description">₱42,950.00</template>
        </a-card-meta>
        <a-button @click="Click2" style="marginTop: 16px">{{sh2}}</a-button>
        <p v-show="desc2">DESCRIPTION</p>
        <p
          v-show="desc2"
        >The new SPD-SX Sampling Pad puts powerful sample creation and playback under your sticks with innovative audio-capturing features, expressive playability, three multi-effects engines, and much more. The perfect addition to any acoustic or electronic drum kit, percussion setup, DJ booth, or keyboard rig, the SPD-SX is equally at home on the live stage, in the recording studio, pre-production suite, or dance club. The SPD-SX takes many of the proven concepts from its predecessor and raises them to a new level. Whether you’re firing off one-shot samples, looped phrases, or complete audio playback tracks, the SPD-SX is loaded with the latest technology and tools to get the job done with speed, precision, and convenience. Enjoy the most advanced triggering and sampling technology in a sleek, easy-to-use percussion instrument.</p>
        <a-button :loading="loading2" @click="handleClick2" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/PtlVEMIs38HB4fYP9eDhsslKoMvvtEXuGrsDyCi5.jpeg"
          slot="cover"
        />
        <a-card-meta title="Roland RT-MicS">
          <template slot="description">₱16,950.00</template>
        </a-card-meta>
        <a-button @click="Click3" style="marginTop: 16px">{{sh3}}</a-button>
        <p v-show="desc3">DESCRIPTION</p>
        <p
          v-show="desc3"
        >If your gigs demand more than your acoustic drums can deliver, the RT-MicS is the gateway to an inspiring new world of hybrid sounds. And if you’re daunted by the prospect of a hybrid setup, rest assured that it’s simple to incorporate this compact module into your acoustic kit—with no extra gear—transform your snare and tom into versatile digital pads. The RT-MicS has eight preloaded sounds—from hand-clap to snare variation—that you’ll be using confidently within minutes. But for ambitious drummers, that’s just the start: you could import sampled sounds from a computer via USB, use the onboard mic to capture and process the acoustic snare/tom sound, or even mix acoustic and digital sounds for a bold signature tone. Whatever your ideas, the RT-MicS is the fastest way to explore the exciting possibilities of hybrid drums.</p>
        <a-button :loading="loading3" @click="handleClick3" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      desc1: false,
      sh1: "Show Description",
      desc2: false,
      sh2: "Show Description",
      desc3: false,
      sh3: "Show Description",
      desc4: false,
      sh4: "Show Description"
    };
  },
  methods: {
    handleClick1() {
      this.loading1 = !this.loading1;
    },
    Click1() {
      this.desc1 = !this.desc1;
      if (this.desc1) {
        this.sh1 = "Hide Description";
      } else {
        this.sh1 = "Show Description";
      }
    },
    handleClick2() {
      this.loading2 = !this.loading2;
    },
    Click2() {
      this.desc2 = !this.desc2;
      if (this.desc2) {
        this.sh2 = "Hide Description";
      } else {
        this.sh2 = "Show Description";
      }
    },
    handleClick3() {
      this.loading3 = !this.loading3;
    },
    Click3() {
      this.desc3 = !this.desc3;
      if (this.desc3) {
        this.sh3 = "Hide Description";
      } else {
        this.sh3 = "Show Description";
      }
    },
    handleClick4() {
      this.loading4 = !this.loading4;
    },
    Click4() {
      this.desc4 = !this.desc4;
      if (this.desc4) {
        this.sh4 = "Hide Description";
      } else {
        this.sh4 = "Show Description";
      }
    }
  }
};
</script>