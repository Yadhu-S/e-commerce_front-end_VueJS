<template>
  <div class="group"> 
    <slot name="ipField"></slot>     
    <span class="highlight"></span>
    <span class="bar"></span>
    <slot name="label"> </slot>
  </div>
</template>

<style scoped >
/* material Input boxes styling */
    .group 			  { 
      position:relative; 
      margin-top: 27px;
    }
    .inputMat 				{
      font-size:15px;
      padding: 8px 10px 10px 0;
      display:block;
      width:100%;
      border:none;
      border-bottom: 1px solid #e0e0e0;
    }
    .inputMat:focus 		{ outline:none; }

    /* .labelMat ======================================= */
    .labelMat, .labelMatPass{
      color:#999; 
      font-size:15px;
      font-weight:normal;
      position:absolute;
      pointer-events:none;
      top:10px;
      transition:0.2s ease all; 
      -moz-transition:0.2s ease all; 
      -webkit-transition:0.2s ease all;
    }

    /* active state */
    .inputMat:focus ~ .labelMat, .inputMat:valid ~ .labelMat, .inputMat:focus ~ .labelMatPass, .inputMat:valid ~ .labelMatPass  		{
      top:-12px;
      font-size:12px;
      color:#455e74;
    }

    /* BOTTOM BARS ================================= */
    .bar 	{ position:relative; display:block; width:100%; }
    .bar:before, .bar:after 	{
      content:'';
      height:1px; 
      width:0;
      bottom:1px; 
      position:absolute;
      background:#455e74; 
      transition:0.2s ease all; 
      -moz-transition:0.2s ease all; 
      -webkit-transition:0.2s ease all;
    }
    .bar:before {
      left:50%;
    }
    .bar:after {
      height: 1px;
      right:50%; 
    }

    /* active state */
    .inputMat:focus ~ .bar:before, .inputMat:focus ~ .bar:after {
      width:50%;
    }
</style>
