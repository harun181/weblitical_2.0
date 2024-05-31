class DeStaggeringHandlerClass extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{wrapper:'.de_staggering_hover_yes',widget_container:'.de_staggering_animation_yes',},}}
getDefaultElements(){const selectors=this.getSettings('selectors');return{$wrapper:this.$element.find(selectors.wrapper),$widget_container:this.$element.find(selectors.widget_container),}}
do_frontend_animation(){if(!this.$element.hasClass('de_staggering_hover_yes')){return}
var ele=this.$element.get()
var element=ele[0]
var column_classes=element.classList
var delay_increment=500,parent_animation_mousehover='fadeIn',parent_animation_mouseout='fadeOut',run_animation=!1
jQuery.each(column_classes,(index,value)=>{if(value.search('de_staggering_parent_animation_mousehover_')===0){parent_animation_mousehover=value.replace('de_staggering_parent_animation_mousehover_','')}
if(value.search('de_staggering_parent_animation_mouseout_')===0){parent_animation_mouseout=value.replace('de_staggering_parent_animation_mouseout_','')}
if(value.search('de_staggering_child_delay_')===0){delay_increment=parseInt(value.replace('de_staggering_child_delay_',''))}
if(value.search('de_staggering_run_animation')===0){run_animation=!0}})
element.addEventListener("mouseenter",function(e){e.preventDefault;var run_animation=element.classList.contains('de_staggering_run_animation')
var childs=element.querySelectorAll(".de_staggering_animation_yes")
var delay=0
Array.prototype.forEach.call(childs,function(el,index){delay=delay+delay_increment
var arr_classes=el.classList
var animation_mousehover='inherited'
var animation_mouseout='inherited'
jQuery.each(arr_classes,(index,value)=>{if(value.search('de_staggering_animation_mousehover_')===0){animation_mousehover=value.replace('de_staggering_animation_mousehover_','')}
if(value.search('de_staggering_animation_mouseout_')===0){animation_mouseout=value.replace('de_staggering_animation_mouseout_','')}})
if(animation_mousehover==='inherited'){animation_mousehover=parent_animation_mousehover}
if(animation_mouseout==='inherited'){animation_mouseout=parent_animation_mouseout}
if(run_animation){var animation_delay='animation-delay:'+delay+'ms'
el.setAttribute('style',animation_delay)
el.classList.remove("animate__animated");el.classList.remove("animate__"+animation_mousehover);el.classList.remove("animate__"+animation_mouseout);void el.offsetWidth;el.classList.add("animate__animated");el.classList.add("animate__"+animation_mousehover)}else{el.classList.remove("animate__animated");el.classList.remove("animate__"+animation_mousehover);el.classList.remove("animate__"+animation_mouseout);void el.offsetWidth}})},!1);element.addEventListener("mouseleave",function(e){e.preventDefault;var run_animation=element.classList.contains('de_staggering_run_animation')
var childs=element.querySelectorAll(".de_staggering_animation_yes");var delay=0
Array.prototype.forEach.call(childs,function(el,index){delay=delay+delay_increment
var arr_classes=el.classList
var animation_mousehover='inherited'
var animation_mouseout='inherited'
jQuery.each(arr_classes,(index,value)=>{if(value.search('de_staggering_animation_mousehover_')===0){animation_mousehover=value.replace('de_staggering_animation_mousehover_','')}
if(value.search('de_staggering_animation_mouseout_')===0){animation_mouseout=value.replace('de_staggering_animation_mouseout_','')}})
if(animation_mousehover==='inherited'){animation_mousehover=parent_animation_mousehover}
if(animation_mouseout==='inherited'){animation_mouseout=parent_animation_mouseout}
if(run_animation){var animation_delay='animation-delay:'+delay+'ms'
el.setAttribute('style',animation_delay)
el.classList.remove("animate__animated");el.classList.remove("animate__"+animation_mousehover);el.classList.remove("animate__"+animation_mouseout);void el.offsetWidth;el.classList.add("animate__animated");el.classList.add("animate__"+animation_mouseout)}else{el.classList.remove("animate__animated");el.classList.remove("animate__"+animation_mousehover);el.classList.remove("animate__"+animation_mouseout);void el.offsetWidth}})},!1)}
onInit(){var observer=new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.attributeName==="class"){var classes=$(mutation.target).prop(mutation.attributeName);var arr_classes=classes.split(' ')
var do_animation=!1,delay_increment=500,parent_animation_mousehover='fadeIn',parent_animation_mouseout='fadeOut'
var de_staggering_hover_yes=!1,de_staggering_preview_on_hover_yes=!1,run_animation=!1
jQuery.each(arr_classes,(index,value)=>{if(value.search('de_staggering_hover_yes')===0){de_staggering_hover_yes=!0}
if(value.search('de_staggering_preview_on_hover_yes')===0){de_staggering_preview_on_hover_yes=!0}
if(value.search('de_staggering_parent_animation_mousehover_')===0){parent_animation_mousehover=value.replace('de_staggering_parent_animation_mousehover_','')}
if(value.search('de_staggering_parent_animation_mouseout_')===0){parent_animation_mouseout=value.replace('de_staggering_parent_animation_mouseout_','')}
if(value.search('de_staggering_child_delay_')===0){delay_increment=parseInt(value.replace('de_staggering_child_delay_',''))}
if(value.search('de_staggering_run_animation')===0){run_animation=!0}})
if(de_staggering_hover_yes&&de_staggering_preview_on_hover_yes&&run_animation){do_animation=!0}
var elementId=mutation.target.attributes['data-id'].nodeValue;var elementSelector=document.querySelector("[data-id='"+elementId+"']");if(do_animation){mutation.target.onmouseenter=function(e){var childs=elementSelector.querySelectorAll(".de_staggering_animation_yes");var delay=0
Array.prototype.forEach.call(childs,function(el,index){delay=delay+delay_increment
var arr_classes=el.classList
var remove_classes=[]
var animation_mousehover='inherited'
var animation_mouseout='inherited'
jQuery.each(arr_classes,(index,value)=>{if(value.search('de_staggering_animation_mousehover_')===0){animation_mousehover=value.replace('de_staggering_animation_mousehover_','')}
if(value.search('de_staggering_animation_mouseout_')===0){animation_mouseout=value.replace('de_staggering_animation_mouseout_','')}
if(value.search('animate__')===0){remove_classes.push(value)}})
jQuery.each(remove_classes,(index,value)=>{el.classList.remove(value)})
var animation_delay='animation-delay:'+delay+'ms'
el.setAttribute('style',animation_delay)
void el.offsetWidth;el.classList.add("animate__animated");if(animation_mousehover==='inherited'){el.classList.add("animate__"+parent_animation_mousehover)}else{el.classList.add("animate__"+animation_mousehover)}})}
mutation.target.onmouseleave=function(e){var childs=elementSelector.querySelectorAll(".de_staggering_animation_yes");var delay=0
Array.prototype.forEach.call(childs,function(el,index){delay=delay+delay_increment
var arr_classes=el.classList
var remove_classes=[]
var animation_mousehover='inherited'
var animation_mouseout='inherited'
jQuery.each(arr_classes,(index,value)=>{if(value.search('de_staggering_animation_mousehover_')===0){animation_mousehover=value.replace('de_staggering_animation_mousehover_','')}
if(value.search('de_staggering_animation_mouseout_')===0){animation_mouseout=value.replace('de_staggering_animation_mouseout_','')}
if(value.search('animate__')===0){remove_classes.push(value)}})
jQuery.each(remove_classes,(index,value)=>{el.classList.remove(value)})
var animation_delay='animation-delay:'+delay+'ms'
el.setAttribute('style',animation_delay)
void el.offsetWidth;el.classList.add("animate__animated");if(animation_mouseout==='inherited'){el.classList.add("animate__"+parent_animation_mouseout)}else{el.classList.add("animate__"+animation_mouseout)}})}}else{if(elementSelector){var childs=elementSelector.querySelectorAll(".de_staggering_animation_yes");Array.prototype.forEach.call(childs,function(el,index){var arr_classes=el.classList
var remove_classes=[]
var animation_type='inherited'
jQuery.each(arr_classes,(index,value)=>{if(value){if(value.search('de_staggering_animation_mousehover_')===0){animation_type=value.replace('de_staggering_animation_mousehover_','')}
if(value.search('animate__')===0){remove_classes.push(value)}}})
jQuery.each(remove_classes,(index,value)=>{el.classList.remove(value)})})
mutation.target.onmouseenter=null
mutation.target.onmouseleave=null}}}})});if(this.$element){var element_type=this.$element.context.attributes['data-element_type'].value;if(element_type==='column'){var elementId=this.$element.context.attributes['data-id'].nodeValue;var elementSelector=document.querySelector("[data-id='"+elementId+"']");if(elementSelector){observer.observe(elementSelector,{attributes:!0})}}}}}
jQuery(window).on('elementor/frontend/init',()=>{const addHandler=($element)=>{elementorFrontend.elementsHandler.addHandler(DeStaggeringHandlerClass,{$element,})};elementorFrontend.hooks.addAction('frontend/element_ready/global',addHandler)});jQuery(document).ready(()=>{de_staggering_init_responsive()})
jQuery(window).on('resize',()=>{de_staggering_init_responsive()})
function de_staggering_init_responsive(){var onDesktop=!1
var onTablet=!1
var onMobile=!1
var docWidth=document.body.clientWidth
var tabletBreakpoint=elementorFrontend.config.responsive.breakpoints.tablet.value
var mobileBreakpoint=elementorFrontend.config.responsive.breakpoints.mobile.value
if(docWidth>tabletBreakpoint){onDesktop=!0}else if(docWidth<=mobileBreakpoint){onMobile=!0}else{onTablet=!0}
var columns=document.querySelectorAll(".de_staggering_hover_yes")
Array.prototype.forEach.call(columns,function(col,index){col.classList.remove('de_staggering_run_animation')
if(onDesktop&&col.classList.contains('de_staggering_on_desktop_yes')){if(!col.classList.contains('de_staggering_run_animation')){col.classList.add('de_staggering_run_animation')}}
if(onTablet&&col.classList.contains('de_staggering_on_tablet_yes')){if(!col.classList.contains('de_staggering_run_animation')){col.classList.add('de_staggering_run_animation')}}
if(onMobile&&col.classList.contains('de_staggering_on_mobile_yes')){if(!col.classList.contains('de_staggering_run_animation')){col.classList.add('de_staggering_run_animation')}}})}