<template>
	<div>
		<h2>{{ titre }}</h2>
		<form class="container">
			<label for="nom">Nom</label>
			<input type="text" />

			<label for="prenom">Prenom</label>
			<input type="text" />

			<label for="email">Email</label>
			<input type="email" />

			<label for="password">Password</label>
			<input type="password" />

			<label for="verifPassword">Verification</label>
			<input type="password" />

			<button @click.prevent="inscription">Valider</button>
			<p @click="connexion">Connexion</p>
		</form>
	</div>
</template>

<script>
const InscriptionComponent = {
	props: {
		titre: String,
		connexion: Function,
	},
	data() {
		return {};
	},
	methods: {
		inscription() {
			console.log("hello");
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
