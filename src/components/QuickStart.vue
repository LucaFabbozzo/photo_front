<script setup>
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from "@cloudinary/vue";
import { fill } from "@cloudinary/url-gen/actions/resize";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dxm7oj4xi',
  },
});

const myImg = cld.image('samples/coffee');
    myImg.resize(fill().width(250).height(250));
</script>

<template>
    <div>
      <AdvancedImage :cldImg="myImg" />
    </div>
  </template>