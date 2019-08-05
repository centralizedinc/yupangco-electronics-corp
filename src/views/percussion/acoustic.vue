<template>
  <div style="padding: 20px;" align="middle">
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/rydeenfineblue.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha Rydeen 5 Piece Drum Set">
          <template slot="description">₱32,950.00</template>
        </a-card-meta>
        <a-button @click="Click1" style="marginTop: 16px">{{sh1}}</a-button>
        <p v-show="desc1">DESCRIPTION</p>
        <p
          v-show="desc1"
        >*Cymbals not included. The new RYDEEN (5-piece shell pack) is exactly what any beginner or intermediate player would love to play.</p>
        <a-button :loading="loading1" @click="handleClick1" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10" :padding="20">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/stagecustomnatural.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha Stage Custom Birch">
          <template slot="description">₱79,950.00</template>
        </a-card-meta>
        <a-button @click="Click2" style="marginTop: 16px">{{sh2}}</a-button>
        <p v-show="desc2">DESCRIPTION</p>
        <p
          v-show="desc2"
        >With the introduction of the Stage Custom in 1995, Yamaha, once again, set the standard for value and sound. The new Stage Custom inherits 100% birch wood with upgraded metal parts.</p>
        <a-button :loading="loading2" @click="handleClick2" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/absolutecustom.jpg"
          slot="cover"
        />
        <a-card-meta title="Yamaha Absolute Hybrid Maple 5 pcs. Drum Set">
          <template slot="description">₱269,950.00</template>
        </a-card-meta>
        <a-button @click="Click3" style="marginTop: 16px">{{sh3}}</a-button>
        <p v-show="desc3">DESCRIPTION</p>
        <p v-show="desc3">
          An extraordinary degree of expressive power, allowing drummers to pursue a level of expression that perhaps they have not experienced before in their other drums.
          *Hybrid maple shell (center wenge ply)
          *Hook lug
          *Y.E.S.S. III mount system
          *Vent hole
          *Optimized bearing edge shape
          *Inner vintage finish
        </p>

        <a-button :loading="loading3" @click="handleClick3" style="marginTop: 16px">Add to Cart</a-button>
      </a-card>
    </a-row>
    <a-row :gutter="10">
      <a-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://www.yupangco.com/img/cache/thumbnail/xsI81YOm1WJ5jHdIyDkDLmrBNdsvRDSB9k3NdUAp.jpeg"
          slot="cover"
        />
        <a-card-meta title="Yamaha Absolute Hybrid Maple 5 pcs. Drum Set">
          <template slot="description">₱269,950.00</template>
        </a-card-meta>
        <a-button @click="Click4" style="marginTop: 16px">{{sh4}}</a-button>
        <p v-show="desc4">DESCRIPTION</p>
        <p v-show="desc4">
          An extraordinary degree of expressive power, allowing drummers to pursue a level of expression that perhaps they have not experienced before in their other drums.
          *Hybrid maple shell (center wenge ply)
          *Hook lug
          *Y.E.S.S. III mount system
          *Vent hole
          *Optimized bearing edge shape
          *Inner vintage finish
        </p>

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