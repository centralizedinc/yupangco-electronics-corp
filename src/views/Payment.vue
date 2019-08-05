<template>
  <div>
    <a-textarea
      label="Name: "
      placeholder1="Autosize height based on content lines"
      :autosize="{ minRows: 2, maxRows: 6 }"
    />
    <div style="margin: 24px 0" />
    <a-textarea
      label="Credit Card: "
      placeholder2="Autosize height with minimum and maximum number of lines"
      autosize
    />
    <div style="margin: 24px 0" />
    <a-button @click="handleClick" style="marginTop: 16px">Submit</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder1: "",
      placeholder2: ""
    };
  },
  methods: {
    handleClick() {
      console.log("place holder1: " + JSON.stringify(this.placeholder1));
    }
  }
};
</script>