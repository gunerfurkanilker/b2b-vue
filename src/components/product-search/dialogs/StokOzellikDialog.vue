<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
  >
    <v-card>
      <v-card-title>
        {{ title }}
        
      </v-card-title>
      <v-card-text class="pt-5">

      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn rounded color="secondary" @click="dialog = false">
          İptal
        </v-btn>
        
        <v-btn rounded color="primary">
          Kaydet
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  props:{
    showDialog:{
      type:Boolean,
      default:false
    },
    title:{
      type: String,
      default: ""
    },
    product:{

    }
  },
  data(){
    return {
      dialog: false
    }
    
  },
  watch:{
    "dialog": function (newVal){
      this.$emit("dialogChange",newVal)
    },
    "showDialog": function (newVal){
      this.dialog = newVal
    }

  }
}

</script>