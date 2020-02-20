<template>
  <v-app>
    <v-content>
      <section>
        <v-parallax src="@/assets/section.jpg" height="600">
          <v-layout column align-center justify-center class="white--text">
            <!-- <img src="@/assets/me.jpg" class="profile-picture"
        alt="smiling" /> -->
            <h1 class="white--text mb-2 display-1 text-center">Michael Yenny</h1>
            <div class="white--text subheading mb-4 text-center">Full Stack Software Engineer</div>
            <!-- <v-btn class="mt-12" color="blue lighten-2" dark large href="/pre-made-themes">Call Now</v-btn> -->
          </v-layout>
        </v-parallax>
      </section>

       <section>
        <v-layout column wrap class="my-12" align-center>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout column wrap class="my-12">
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                        <v-icon x-large class="blue--text text--lighten-2">mdi-book</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Portfolio</div>
                    </v-card-title>
                    <v-card-text>
                        Img goes here
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-layout column wrap class="my-12" align-center>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout column wrap class="my-12">
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                        <v-icon x-large class="blue--text text--lighten-2">mdi-account</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">About Me</div>
                    </v-card-title>
                    <v-card-text>
                      Self-motivated full stack web developer with a proven track record of learning and implementing new technologies. Passionate about writing clean code and leveraging strengths of diverse teams. I have an entrepreneurial spirit paired with a relentless work ethic. I am a skilled communicator with excellent interpersonal and problem-solving skills.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">
            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact Me</div>
                </v-card-title>
                <v-list justify-center class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>813-445-7206</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Tampa, FL</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <!-- <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>amichaelj1@gmail.com</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item> -->
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({

  })
};
</script>

<style scoped>
section {
  min-height: calc(100vh - 62px);
}
.profile-picture {
  height: 300px;
  width: 300px;
  border-radius: 200px;
  opacity: 75%;
}
</style>