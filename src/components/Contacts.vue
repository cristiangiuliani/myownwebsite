<template lang="html">
	<section class="contacts section">
		<div class="container content is-medium has-text-centered">
			<h3>Contatti</h3>
			<div class="columns is-multiline">
				<div :class="'field column '+field.class" v-for="(field, key) in fields" :key="key">
  					<div class="control">
						<textarea  v-if="field.type=='textarea'"  :name="key" class="textarea is-medium" :type="field.type" :placeholder="field.desc"  v-model.trim.lazy="field.value"></textarea>
						<template v-else-if="field.type=='checkbox'">
							<label class="checkbox">
								<input :type="field.type" v-model.trim.lazy="field.value"> {{field.desc}}
							</label>
						</template>
						<template v-else-if="field.type=='file'">
							<div class="file has-name is-boxed column">
								<label class="file-label">
									<input class="file-input" :type="field.type" :name="key"  v-model.trim.lazy="field.value">
									<span class="file-cta">
										<span class="file-icon">
											<i class="fas fa-upload"></i>
										</span>
										<span class="file-label">{{field.desc}}</span>
									</span>
									<span class="file-name">{{field.value}}</span>
								</label>
							</div>
						</template>
						<input v-else :name="key" class="input is-medium" :type="field.type" :placeholder="field.desc" v-model.trim.lazy="field.value" @blur="validate(field)">
						<div class="error">{{field.error}}</div>
					</div>
				</div>
				<div class="column is-full">
					<button type="button" name="reset" class="button is-medium">Reset</button>
					<button type="button" name="submit" class="button is-primary is-medium" @click="submit">Submit</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Contacts',
		methods: {
			validate(field){
				let required = field.required,
					value = field.value,
					type = field.type,
					validation = field.validation,
					emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					alphaNumRE = /^[a-z0-9]+$/i,
					alphaRE = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
					phoneRE = /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/;

				field.error = '',
				field.class = field.class.replace(" is-danger", "");

				if(required && value == ''){
					field.class += ' is-danger';
					field.error = 'The field '+field.name+' is required';
					return false;
				}
				if(validation !== 'undefined' && value != ''){
					if(validation == 'email' && !emailRE.test(value)){
						field.class += ' is-danger';
						field.error = 'The '+field.name+' inserted is not valid';
						return false;
					}
					if(validation == 'alpha' && !alphaRE.test(value)){
						field.class += ' is-danger';
						field.error = 'The field '+field.name+' should be alphanumeric';
						return false;
					}
					if(validation == 'phone' && !phoneRE.test(value)){
						field.class += ' is-danger';
						field.error = 'The '+field.name+' inserted is not valid';
						return false;
					}
				}
				return true;
			},
			submit(){
				let result = true,
					fieldsObj = this.fields,
					thisObj = this;;
				Object.keys(fieldsObj).forEach(function(key){
					if(!thisObj.validate(fieldsObj[key])) result = false;
				});
				console.log(result);
			}
		},
		data(){
			return{
				fields: {
					name: {
						name: 'Name',
						type: 'text',
						desc: 'insert your name',
						class: 'is-full',
						value: '',
						required: true,
						validation: 'alpha',
						error: ''
					},
					email: {
						name: 'E-Mail',
						type: 'email',
						desc: 'insert your email',
						class: 'is-full',
						value: '',
						required: true,
						validation: 'email',
						error: ''
					},
					phone: {
						name: 'Phone',
						type: 'phone',
						desc: 'insert your phone number',
						class: 'is-full',
						value: '',
						required: false,
						validation: 'phone'
					},
					message: {
						name: 'Message',
						type: 'textarea',
						desc: 'insert your message',
						class: 'is-full',
						value: '',
						required: true,
						validation: ''
					},
					attach: {
						name: 'Attach',
						type: 'file',
						desc: 'attach a file (.zip, .pdf, .doc, .txt)',
						class: 'is-half',
						value: '',
						required: false
					},
					profile: {
						name: 'Profile',
						type: 'checkbox',
						desc: 'send profile composer selection',
						class: 'is-half',
						value: false,
						required: false
					},
				}
			}
		}
	}
</script>
