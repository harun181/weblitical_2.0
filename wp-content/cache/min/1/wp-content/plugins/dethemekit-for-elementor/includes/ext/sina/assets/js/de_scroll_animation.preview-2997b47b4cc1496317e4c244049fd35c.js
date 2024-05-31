let animObjects=[];let deScrollOptions=[];class DeScrollOption{constructor(classes){var arr_classes=classes.split(' ')
this.active=!1;this.animation_preview=!1;this.editMode=!1;this.elementWatcher=null;this.scrollTop=0;this.id='';this.transform='translateX';this.distance='50';this.duration='1000',this.direction='normal',this.easing='linear',this.start_animate=0,this.finish_animate=0,this.translateX=!1,this.translateX_distance='',this.translateY=!1,this.translateY_distance='',this.rotate=!1,this.rotate_distance='',this.scale=!1,this.scale_distance='',this.skew=!1,this.skew_distance='',this.run_on_desktop=!1,this.run_on_tablet=!1,this.run_on_mobile=!1,this.run_animation=!0,jQuery.each(arr_classes,(index,value)=>{if(value.search('de_scroll_animation_yes')===0){this.active=!0}
if(value.search('de_scroll_animation_preview_yes')===0){this.animation_preview=!0}
if(value.search('elementor-element-edit-mode')===0){this.editMode=!0}
if(value.length===25&&value.search('elementor-element-')===0){this.id=value.replace('elementor-element-','')}
if(value.search('de_scroll_transform_')===0){this.transform=value.replace('de_scroll_transform_','')}
if(value.search('de_scroll_distance_')===0){this.distance=value.replace('de_scroll_distance_','')}
if(value.search('de_scroll_start_animate_')===0){this.start_animate=parseInt(value.replace('de_scroll_start_animate_',''))}
if(value.search('de_scroll_finish_animate_')===0){this.finish_animate=parseInt(value.replace('de_scroll_finish_animate_',''))}
if(this.finish_animate<this.start_animate){this.finish_animate=parseInt(this.start_animate)+100}
if('de_scroll_translateX_popover_checked'===value){this.translateX=!0}
if('de_scroll_translateY_popover_checked'===value){this.translateY=!0}
if('de_scroll_rotate_popover_checked'===value){this.rotate=!0}
if('de_scroll_scale_popover_checked'===value){this.scale=!0}
if('de_scroll_skew_popover_checked'===value){this.skew=!0}
if(value.search('de_scroll_translateX_distance_')===0){this.translateX_distance=value.replace('de_scroll_translateX_distance_','')}
if(value.search('de_scroll_translateY_distance_')===0){this.translateY_distance=value.replace('de_scroll_translateY_distance_','')}
if(value.search('de_scroll_rotate_distance_')===0){this.rotate_distance=value.replace('de_scroll_rotate_distance_','')}
if(value.search('de_scroll_scale_distance_')===0){this.scale_distance=value.replace('de_scroll_scale_distance_','')}
if(value.search('de_scroll_skew_distance_')===0){this.skew_distance=value.replace('de_scroll_skew_distance_','')}
if(value.search('de_scroll_animation_on_desktop_yes')===0){this.run_on_desktop=!0}
if(value.search('de_scroll_animation_on_tablet_yes')===0){this.run_on_tablet=!0}
if(value.search('de_scroll_animation_on_mobile_yes')===0){this.run_on_mobile=!0}})}}
class DeScrollAnimationHandlerClass extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{wrapper:'.de_scroll_animation_yes',widget_container:'.elementor-widget-container',},last_known_scroll_position:this.last_known_scroll_position,}}
getDefaultElements(){const selectors=this.getSettings('selectors');return{$wrapper:this.$element.find(selectors.wrapper),$widget_container:this.$element.find(selectors.widget_container),$body:this.$element.find('body'),$document:this.$element.find('document'),}}
onInit(){var observer=new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.attributeName==="class"){var attributeValue=$(mutation.target).prop(mutation.attributeName);var $arr_classes=attributeValue.split(' ')
var do_animation=!1
var do_animation_preview=!1
jQuery.each($arr_classes,(index,value)=>{if(value.search('de_scroll_animation_yes')===0){do_animation=!0}
if(value.search('de_scroll_animation_preview_yes')===0){do_animation_preview=!0}})
if(do_animation){let deScrollOption=new DeScrollOption(attributeValue);let animindex=animObjects.length;let i;for(i=0;i<deScrollOptions.length;i++){if(deScrollOptions[i].id===deScrollOption.id){animindex=i;break}}
let tZ_perspective=0;deScrollOptions[animindex]=new DeScrollOption(attributeValue);var el=document.querySelector(".elementor-element-"+deScrollOption.id+".de_scroll_animation_yes .elementor-widget-container")
if(el){el.setAttribute('style','')}
animObjects[animindex]=anime({targets:".elementor-element-"+deScrollOption.id+".de_scroll_animation_yes .elementor-widget-container",perspective:[tZ_perspective,tZ_perspective],scale:function(){let result=1;if(deScrollOption.scale){result=deScrollOption.scale_distance}
return result},translateX:function(){let result=0;if(deScrollOption.translateX){result=deScrollOption.translateX_distance}
return result},translateY:function(){let result=0;if(deScrollOption.translateY){result=deScrollOption.translateY_distance}
return result},rotate:function(){let result=0;if(deScrollOption.rotate){result=deScrollOption.rotate_distance}
return result},skew:function(){let result=0;if(deScrollOption.skew){result=deScrollOption.skew_distance}
return result},easing:deScrollOption.easing,direction:"normal",autoplay:!1,duration:deScrollOption.duration})}}})});if(this.$element){var elementId=this.$element.context.attributes['data-id'].nodeValue;var elementSelector=document.querySelector("[data-id='"+elementId+"']");if(elementSelector){observer.observe(elementSelector,{attributes:!0});if(this.$element.context.classList.contains('de_scroll_animation_yes')){let last_known_scroll_position=0;let ticking=!1;let animindex=animObjects.length;let optionindex=deScrollOptions.length;deScrollOptions[optionindex]=new DeScrollOption(this.$element.context.className);let tZ_perspective=0;animObjects[animindex]=anime({targets:".elementor-element-"+deScrollOptions[optionindex].id+".de_scroll_animation_yes .elementor-widget-container",perspective:[tZ_perspective,tZ_perspective],scale:function(){let result=1;if(deScrollOptions[optionindex].scale){result=deScrollOptions[optionindex].scale_distance}
return result},translateX:function(){let result=0;if(deScrollOptions[optionindex].translateX){result=deScrollOptions[optionindex].translateX_distance}
return result},translateY:function(){let result=0;if(deScrollOptions[optionindex].translateY){result=deScrollOptions[optionindex].translateY_distance}
return result},rotate:function(){let result=0;if(deScrollOptions[optionindex].rotate){result=deScrollOptions[optionindex].rotate_distance}
return result},skew:function(){let result=0;if(deScrollOptions[optionindex].skew){result=deScrollOptions[optionindex].skew_distance}
return result},easing:deScrollOptions[optionindex].easing,autoplay:!1,duration:deScrollOptions[optionindex].duration});var elRect=elementSelector.getBoundingClientRect()
deScrollOptions[optionindex].scrollTop=elRect.y
document.onscroll=()=>{if(!ticking){window.requestAnimationFrame(function(){var i;for(i=0;i<animObjects.length;i++){last_known_scroll_position=0
var scrolledEl=document.querySelector(".elementor-element-"+deScrollOptions[i].id+".de_scroll_animation_yes .elementor-widget-container")
var sTop=0
if(scrolledEl){var scrollbarHeight=document.scrollingElement.scrollHeight
var scrollbarTop=document.scrollingElement.scrollTop
var rect=scrolledEl.getBoundingClientRect()
sTop=rect.y
var sHeight=rect.height
var wHeight=window.innerHeight
if(scrollbarTop===0){last_known_scroll_position=0}else if(sTop<=wHeight){var animHeight=(deScrollOptions[i].finish_animate-deScrollOptions[i].start_animate)*sHeight/100
var animTop=sTop+deScrollOptions[i].start_animate*sHeight/100
last_known_scroll_position=(wHeight-animTop)/animHeight*100}}
if(!deScrollOptions[i].run_animation){last_known_scroll_position=0}
if(deScrollOptions[i].editMode){if(deScrollOptions[i].animation_preview){animObjects[i].seek((last_known_scroll_position/100)*animObjects[i].duration)}}else{animObjects[i].seek((last_known_scroll_position/100)*animObjects[i].duration)}}
ticking=!1});ticking=!0}}}}}}
bindEvents(){}}
jQuery(window).on('elementor/frontend/init',()=>{const addHandler=($element)=>{elementorFrontend.elementsHandler.addHandler(DeScrollAnimationHandlerClass,{$element,})};elementorFrontend.hooks.addAction('frontend/element_ready/global',addHandler)});jQuery(document).ready(()=>{de_scroll_init_responsive()})
jQuery(window).on('resize',()=>{de_scroll_init_responsive()})
function de_scroll_init_responsive(){var onDesktop=!1
var onTablet=!1
var onMobile=!1
var docWidth=document.scrollingElement.scrollWidth
var tabletBreakpoint=elementorFrontend.config.responsive.breakpoints.tablet.value
var mobileBreakpoint=elementorFrontend.config.responsive.breakpoints.mobile.value
if(docWidth>tabletBreakpoint){onDesktop=!0}else if(docWidth<=mobileBreakpoint){onMobile=!0}else{onTablet=!0}
for(i=0;i<deScrollOptions.length;i++){deScrollOptions[i].run_animation=!1
if(onDesktop&&deScrollOptions[i].run_on_desktop){deScrollOptions[i].run_animation=!0}
if(onTablet&&deScrollOptions[i].run_on_tablet){deScrollOptions[i].run_animation=!0}
if(onMobile&&deScrollOptions[i].run_on_mobile){deScrollOptions[i].run_animation=!0}}}