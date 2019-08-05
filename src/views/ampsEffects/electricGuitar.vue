<template>
  <div style="padding: 20px;" align="middle">
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/THR100H.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha THR-100H">
          <template slot="description">₱39,950.00</template>
        </a-card-meta>
        <a-button @click="Click1" style="marginTop: 16px">{{sh1}}</a-button>
        <p v-show="desc1">DESCRIPTION</p>
        <p
          v-show="desc1"
        >Featuring the incredible tone and flexibility of THR100H Dual in a compact, lightweight single-channel body, THR100H has got your back whether you're on-stage, rehearsing with the band or practicing at home. With a big sound from a tiny package, the power to dial in the details of your sound and the connectivity to plug you in wherever you're playing, THR100H bridges all the gaps. Amp Type : SOLID, CLEAN, CRUNCH, LEAD, MODERN Tube Type : EL34, 6L6GC, KT88, EL84, 6V6 Effects : BOOSTER, REVERB, NOISE GATE, FX LOOP, SPEAKER SIMULATION Rated Power Output : 100W (8/16Ω) 50W (4Ω)</p>
        <a-button :loading="loading1" @click="handleClick1" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10" :padding="20">
      <a-card hoverable style="width: 240px">
        <img alt="example" src="https://www.yupangco.com/img/cache/thumbnail/THR5.jpg" slot="cover" />
        <a-card-meta title="Roland SPD-SX">
          <template slot="description">₱13,950.00</template>
        </a-card-meta>
        <a-button @click="Click2" style="marginTop: 16px">{{sh2}}</a-button>
        <p v-show="desc2">DESCRIPTION</p>
        <p
          v-show="desc2"
        >The little brother of the THR10, the THR5 offers the sound quality of the THR10 in a more portable form, making it perfect for use at home or when traveling. Amp Simulations : CLEAN, CRUNCH, LEAD, BRIT HI, MODERN Effects : CHORUS, FLANGER, PHASER, TREMOLO, DELAY, DLY/REV, SPRING, HALL EQ : TONE Speakers : 8cm Full Range x 2 Rated Output : 10W (5W + 5W)</p>
        <a-button :loading="loading2" @click="handleClick2" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/THR10C.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha THR-10C">
          <template slot="description">₱18,950.00</template>
        </a-card-meta>
        <a-button @click="Click3" style="marginTop: 16px">{{sh3}}</a-button>
        <p v-show="desc3">DESCRIPTION</p>
        <p
          v-show="desc3"
        >High-End, Hand-Wired Tone At Your Fingertips. THR10C takes the personal-amp concept to a new level of audio fidelity. The finest tube amps respond to a player’s every touch – with picking dynamics and playing style adding as much to the tone as your guitar and pickups. Using Yamaha’s exclusive VCM (Virtual Circuitry Modelling) technology, THR10C perfectly recreates the unmistakable response and dynamics that only a boutique tube combo can provide. Amp Simulations : DELUXE, CLASS A, US BLUES, BRIT BLUES, MINI, BASS, ACO, FLAT Effects : CHORUS, FLANGER, PHASER, TREMOLO, TAPE ECHO, ECHO/REV, SPRING, HALL EQ : BASS, MIDDLE, TREBLE User Memory : 5 Speakers : 8cm Full Range x 2 Rated Output : 10W (5W + 5W)</p>
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