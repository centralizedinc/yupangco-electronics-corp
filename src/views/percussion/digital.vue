<template>
  <div style="padding: 20px;" align="middle">
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/DTX700K.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha DTX700">
          <template slot="description">₱149,950.00</template>
        </a-card-meta>
        <a-button @click="Click1" style="marginTop: 16px">{{sh1}}</a-button>
        <p v-show="desc1">DESCRIPTION</p>
        <p v-show="desc1">
          The Yamaha DTX700K Electronic Drum Set includes valuable rehearsal functions and the ability to plug in headphones and play along with your iPod or other music player make it ideal for rehearsal.
          DTX TCS (Textured Cellular Silicone) pads offer natural playability, quiet performance, and great feel. 3-zone cymbal pads deliver realistic expression. Over 50 preset kits and hundreds of sounds and effects reside in the DTX500 drum module, while USB and MIDI allow connection with external sound sources. Comes with a sturdy rack for fast setup and solid performance.
        </p>
        <a-button :loading="loading1" @click="handleClick1" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10" :padding="20">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/DD-75.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha DD-75">
          <template slot="description">₱16,950.00</template>
        </a-card-meta>
        <a-button @click="Click2" style="marginTop: 16px">{{sh2}}</a-button>
        <p v-show="desc2">DESCRIPTION</p>
        <p v-show="desc2">
          Versatile, affordable, portable drum set. "The perfect all-in-one mini drum kit solution". Designed from a drummer's point of view. Play along with your favorite music!
          DD-75 is a digital drum kit with eight touch-sensitive pads and two foot pedals. High quality drum and wide variety of percussion sounds from all over the world are mixed with orchestra voices to provide a wide range of musical opportunities. AUX IN jack lets you connect and MP3 player and play along with your favorite music.
        </p>
        <a-button :loading="loading2" @click="handleClick2" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/uQRgHal7qJPgM1N7eeFTwflueenV8jazrGUYmipo.jpeg"
          slot="cover"
        />
        <a-card-meta title="Roland TD-1KV">
          <template slot="description">₱42,950.00</template>
        </a-card-meta>
        <a-button @click="Click3" style="marginTop: 16px">{{sh3}}</a-button>
        <p v-show="desc3">DESCRIPTION</p>
        <p v-show="desc3">
          Roland’s V-Drums are the world’s most popular electronic drums for one reason: they’re the best. Blending superior sound, authentic feel, and rugged durability, each kit in the V-Drums lineup performs at the highest level, a testament to more than three decades of developing electronic drums. The compact TD-1KV is no exception, delivering respected V-Drums quality in a space-saving kit that keeps up with you as your playing evolves. Ideal for everyone that wants to enjoy drums at home, the TD-1KV offers a wide selection of expressive drum kits for playing any musical style, plus fun onboard training and recording functions for building your skills and checking your progress. And as a Roland TD-1KV owner, you’re not just starting an exciting musical journey—you’re also joining the V-Drums family, a group of discerning players that includes the world’s finest drummers and percussionists. • Acclaimed V-Drums sound and performance in an entry-level set • Enjoy drumming in any musical style with 15 expressive drum kits
          • Mesh-head PDX-8 V-Pad provides realistic snare drum feel with head/rim triggering
          • Supports essential acoustic drum techniques, including cymbal choke, advanced hi-hat playing, and more
          • Build playing skills with the onboard Coach function, metronome, and recorder • Practice along with onboard audio songs or your own tracks played from a smartphone or music player connected to the Mix In jack
          • Beater-less kick pedal provides low noise for playing without disturbing others, ideal for practicing at home
          • Space-saving, ergonomic design and stylish looks to suit any room in your home • Sturdy drum rack with quick and easy height adjustment for every drummer, from kids to adults
          • Many upgrade options for enhanced performance, including OP-TD1C for an additional crash cymbal, KT-10 or KD-9 for kick, and more
          • USB-MIDI for using the TD-1KV with the DT-1 Drum Tutor, V-Drums Friend Jam series, and other popular computer music software
          • Intuitive user interface for easy operation
        </p>
        <a-button :loading="loading3" @click="handleClick3" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/P89TD25KVX.jpg"
          slot="cover"
        />
        <a-card-meta title="Roland TD-25KVX">
          <template slot="description">₱249,950.00</template>
        </a-card-meta>
        <a-button @click="Click4" style="marginTop: 16px">{{sh4}}</a-button>
        <p v-show="desc4">DESCRIPTION</p>
        <p
          v-show="desc4"
        >With the TD-25KVX, serious drummers can tap into high-end V-Drums playability in a mid-level kit, with the strong visual presence and feel to make every player feel at home. Equipped with a sound engine derived from the TD-30 V-Drums series, the TD-25KVX delivers all the acclaimed expressiveness that makes Roland’s top-line V-Drums the undisputed choice of pro players everywhere. A streamlined interface makes it easy to create personalized kits, while the built-in audio recording function lets you capture drum performances for evaluation and sharing. Other premium features include a large 12-inch dual-mesh snare pad with positional sensing, which fits to a regular snare drum stand for flexible positioning, 10-inch mesh-head pads for toms, delivering a more-natural playing feel and VH-11 V-Hi-Hat for playing with authentic hi-hat techniques. The KD-180 Bass Drum features an 18-inch genuine acoustic shell with built-in pad system, which delivers incredible acoustic feel and distinctive ‘acoustic kit’ looks.</p>

        <a-button :loading="loading4" @click="handleClick4" style="marginTop: 16px">Add to Cart</a-button>
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