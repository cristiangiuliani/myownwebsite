<template lang="html">
	<section class="contacts section">
		<div class="container content is-medium has-text-centered">
			<h3>Contatti</h3>
			<div class="columns is-multiline">
				<div :class="'field column '+field.class" v-for="field in fields" :key="field.name">
  					<div class="control">
						<textarea  v-if="field.type=='textarea'"  :name="field.name" class="textarea is-medium" :type="field.type" placeholder="Large textarea"></textarea>
						<template v-else-if="field.type=='checkbox'">
							<label class="checkbox">
								<input :type="field.type"> {{field.desc}}
							</label>
						</template>
						<template v-else-if="field.type=='file'">
							<div class="file has-name is-boxed column">
								<label class="file-label">
									<input class="file-input" :type="field.type" :name="field.name">
									<span class="file-cta">
										<span class="file-icon">
											<i class="fas fa-upload"></i>
										</span>
										<span class="file-label">{{field.desc}}</span>
									</span>
									<span class="file-name"></span>
								</label>
							</div>
						</template>
						<input v-else :name="field.name" class="input is-medium" :type="field.type" :placeholder="field.desc">
					</div>
				</div>
			</div>
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
				fields: [
					{
						name: 'name',
						type: 'text',
						desc: 'insert your name',
						class: 'is-full'
					},
					{
						name: 'email',
						type: 'email',
						desc: 'insert your email',
						class: 'is-full'
					},
					{
						name: 'message',
						type: 'textarea',
						desc: 'insert your message',
						class: 'is-full'
					},
					{
						name: 'attach',
						type: 'file',
						desc: 'attach a file (.zip, .pdf, .doc, .txt)',
						class: 'is-half'
					},
					{
						name: 'profile',
						type: 'checkbox',
						desc: 'send profile composer selection',
						class: 'is-half'
					},
				]
			}
		}
	}
</script>
