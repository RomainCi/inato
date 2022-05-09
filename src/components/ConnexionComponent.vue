<template>
	<div>
		<h2>{{ titre }}</h2>
		<form class="container">
			<label for="email">Email</label>
			<input type="mail" v-model="user.email" />

			<label for="password">Password</label>
			<input type="password" v-model="user.password" />

			<button @click.prevent="connexion">Valider</button>
		</form>
		<p>Vous n'avez pas de compte?</p>
		<p @click="inscription">Inscrivez-vous</p>
	</div>
</template>

<script>
const ConnexionComponent = {
	props: {
		titre: String,
		inscription: Function,
	},
	data() {
		return {
			user: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		connexion() {
			console.log(
				"email :",
				this.user.email,
				" password : ",
				this.user.password
			);
		},
	},
};
export default ConnexionComponent;
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
}
</style>
