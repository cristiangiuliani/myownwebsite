<template lang="html">
	<section class="contacts section">
		<div class="container content is-medium has-text-centered">
			<h3>Contatti</h3>
			<form>
				<div class="field">
  					<div class="control">
						<input name="name" class="input is-medium" type="text" placeholder="insert your name">
					</div>
				</div>
				<div class="field">
					<div class="control">
						<input name="email" class="input is-medium" type="email" placeholder="insert your email">
						<span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
					</div>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Contacts',
		methods:{


		},
		data(){
			return{
				void: []
			}
		}
	}
</script>
