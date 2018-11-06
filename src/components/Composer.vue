<template lang="html">
	<section class="composer section">
		<div class="container content is-medium has-text-centered">
			<h1>Profile Composer</h1>
			<div class="available">
				<h2>Available Skills</h2>
				<transition-group name="available" enter-active-class="bounceIn" leave-active-class="bounceOut">
					<button :class="'button is-primary  is-rounded '+skill.profiles.join(' ')" v-for="skill in available"  :key="skill.id" @click="toggleSkill" v-bind:data-skill="skill.id">{{ skill.desc }}</button>
				</transition-group>
			</div>
			<div class="selected">
				<h2>Selected Skills</h2>
				<transition-group name="selected" enter-active-class="bounceIn" leave-active-class="bounceOut">
					<button class="button is-info  is-rounded" v-for="select in selected" :key="select.id"  @click="toggleSkill" v-bind:data-skill="select.id" >{{ select.desc }}</button>
				</transition-group>
			</div>
			<div class="profiler">
				<h2>Profile</h2>
				<ul>
					<transition-group name="matches" enter-active-class="bounceIn" leave-active-class="bounceOut">
						<li v-for="match in matches"  :key="match.id" v-if="match.selected" >{{ match.desc }}</li>
					</transition-group>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>

	export default {
		name: 'Composer',
		methods:{
			toggleSkill(event){
				let id = event.target.dataset.skill,
					availableObj = this.available.filter(skill => skill.id==id),
					selectedObj = this.selected.filter(skill => skill.id==id),
					skillsObj = this.skills,
					matchesObj = this.matches,
					delProfiles = [];

				let flag = availableObj.length == 0 ? 'selected' : 'available';
				let currentObj = flag == 'selected' ? selectedObj[0] : availableObj[0];

				currentObj.selected = currentObj.selected ? false : true;

				currentObj.profiles.forEach(function(profile){
					let matchProfile = matchesObj.filter(item => item.id==profile);
					if(flag == 'available' && !matchProfile[0].selected) matchProfile[0].selected = true;

					if(flag == 'selected' && matchProfile[0].selected) delProfiles.push(profile);
				});

				if(delProfiles.length > 0){
					this.selected.filter(item => item.selected).forEach(function(skill){
						if(currentObj.id != skill.id){
							delProfiles.forEach(function(item){
								if(skill.profiles.filter(check => check == item).length > 0){
									delProfiles.splice(delProfiles.indexOf(item),1);
								}
							});
						}
					});
				}

				delProfiles.forEach(function(profile){
					let checkObj = matchesObj.filter(item => item.id==profile);
					if(checkObj.length > 0){
						checkObj[0].selected = false;
					}
				});

			}
		},
		data(){
			return{
				legend: [	'only knowledge',
							'knowledge and exercises',
							'used in few real projects',
							'used in many real project',
							'teacher of this'
						],
				profiles: [
					{
						id: 'fe-dev',
						desc: 'Front End Developer',
						selected:false
					},
					{
						id: 'be-dev',
						desc: 'Back End Developer',
						selected:false
					},
					{
						id: 'web-design',
						desc: 'Web Designer',
						selected:false
					},
					{
						id: 'ux-ui',
						desc: 'UX/UI Designer',
						selected:false
					}
				],
				skills: [
					{
						id: 'html',
						desc: 'HTML 5',
						level: 5,
						profiles: ['web-design'],
						selected: false
					},
					{
						id: 'css',
						desc: 'CSS 3',
						level: 5,
						profiles: ['web-design'],
						selected: false
					},
					{
						id: 'ps',
						desc: 'Adobe Photoshop',
						level: 5,
						profiles: ['web-design','ux-ui'],
						selected: false
					},
					{
						id: 'sketch',
						desc: 'Sketch',
						level: 4,
						profiles: ['ux-ui'],
						selected: false
					},
					{
						id: 'scss',
						desc: 'SCSS/SASS',
						level: 5,
						profiles: ['fe-dev'],
						selected: false
					},
					{
						id: 'less',
						desc: 'LESS',
						level: 5,
						profiles: ['fe-dev'],
						selected: false
					},
					{
						id: 'js',
						desc: 'Javascript',
						level: 5,
						profiles: ['fe-dev'],
						selected: false
					},
					{
						id: 'vue',
						desc: 'Vue.js',
						level: 3,
						profiles: ['fe-dev'],
						selected: false
					},
					{
						id: 'node',
						desc: 'NODE.js',
						level: 2,
						profiles: ['fe-dev', 'be-dev'],
						selected: false
					},
					{
						id: 'php',
						desc: 'PHP',
						level: 4,
						profiles: ['be-dev'],
						selected: false
					},
					{
						id: 'sql',
						desc: 'SQL',
						level: 4,
						profiles: ['be-dev'],
						selected: false
					}
				]
			}
		},
		computed:{
			selected: {
				get: function(){
					return this.skills.filter(skill => skill.selected);
				},
				set: function(value){
					this.skills.filter(skill => skill.id==this.id).selected = value;
				},
			},
			available: {
				set: function(value){
					this.skills.filter(skill => skill.id==this.id).selected = value;
				},
				get: function(){
					return this.skills.filter(skill => !skill.selected);
				}
			},
			matches: {
				set: function(value){
					this.profiles.filter(profile => profile.id==this.id).selected = value;
				},
				get: function(){
					return this.profiles;
				}
			}
		}
	}
</script>
