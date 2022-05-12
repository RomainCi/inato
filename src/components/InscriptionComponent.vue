<template>
  <div>
    <h2>{{ titre }}</h2>
    <form class="container" @submit.prevent="inscription">
      <label for="nom">Nom</label>
      <input type="text" v-model="user.nom" @blur="v$.user.nom.$touch" />
      <div v-if="v$.user.nom.$error">
        {{ this.v$.user.nom.required.$message }}
      </div>

      <label for="prenom">Prenom</label>
      <input type="text" v-model="user.prenom" @blur="v$.user.prenom.$touch" />
      <div v-if="v$.user.prenom.$error">
        {{ this.v$.user.prenom.required.$message }}
      </div>

      <label for="email">Email</label>
      <input type="email" v-model="user.email" @blur="v$.user.email.$touch" />
      <div v-if="v$.user.email.$error">
        {{ this.v$.user.email.email.$message }}
      </div>

      <label for="password">Password</label>
      <input
        type="text"
        v-model="user.password"
        @blur="v$.user.password.$touch"
      />
      <div class="error" v-if="v$.user.password.$error">
        {{
          this.nbrCharPassword - this.user.password.length > 0
            ? `il manque ${
                this.nbrCharPassword - this.user.password.length
              } lettre`
            : ""
        }}

        {{
          this.verifMaj.test(this.user.password)
            ? ""
            : "1 majuscule obligatoire"
        }}
        {{
          this.verifNumber.test(this.user.password)
            ? ""
            : "1 chiffre obligatoire"
        }}
        {{
          this.verifSpecial.test(this.user.password)
            ? ""
            : "1 caractere spécial obligatoire"
        }}
      </div>

      <label for="verifPassword">Verification</label>
      <input
        type="text"
        v-model="user.confirmPassword"
        @blur="v$.user.confirmPassword.$touch"
      />
      <div class="error" v-if="v$.user.confirmPassword.$error">
        {{ this.v$.user.confirmPassword.sameAsPassword.$message }}
      </div>
      <button>inscription</button>
      <p @click="connexion">Connexion</p>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, sameAs, helpers } from "@vuelidate/validators";
const InscriptionComponent = {
  props: {
    titre: String,
    connexion: Function,
  },
  data() {
    return {
      user: {
        nom: "",
        prenom: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      nbrCharPassword: 8,
      verifMaj: /^(?=.*?[A-Z]).{1,}$/,
      verifNumber: /^(?=.*?[0-9]).{1,}$/,
      verifSpecial: /^(?=.*?[#?!§€/¤£@$<>%^&*§¤:;,-]).{1,}$/,
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      user: {
        nom: { required: helpers.withMessage("Nom requis", required) },
        prenom: { required: helpers.withMessage("Prénom requis", required) },
        email: {
          required,
          email: helpers.withMessage("Email incorrect", email, required),
        },
        password: {
          required,
          checkPassword: helpers.regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!§€/¤£@$<>%^&*§¤:;,-]).{8,}$/
          ),
        },
        confirmPassword: {
          sameAsPassword: helpers.withMessage(
            "le mot de passe est différent",
            sameAs(this.user.password)
          ),
        },
      },
    };
  },

  methods: {
    inscription() {
      this.v$.$touch();
      !this.v$.user.nom.$error &&
      !this.v$.user.prenom.$error &&
      !this.v$.user.email.$error &&
      !this.v$.user.password.$error &&
      !this.v$.user.confirmPassword.$error
        ? console.log("true")
        : console.log("false");
    },
  },
};
export default InscriptionComponent;
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
