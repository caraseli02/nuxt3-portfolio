<script setup>
const runtimeConfig = useRuntimeConfig()

const name = ref("")
const email = ref("")
const message = ref("")

const submitForm = async ({email, name, message}) => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: runtimeConfig.public.formAccess,
      name: name,
      email: email,
      message: message,
    }),
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
}
</script>

<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2">
    <div class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-secondary-light
        dark:bg-slate-800
        rounded-xl
        shadow-xl
        text-left
      ">
      <p class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        ">
        Contact Form
      </p>
      <FormKit type="form" submit-label="Login" @submit="submitForm">
        <FormKit name="email" label="Email address" validation="required|email" />
        <FormKit type="text" name="name" label="Full name" help="How I can call you?" validation="required" />
        <FormKit name="message" type="textarea" label="Message" help="Please describe how can I help you."
          validation="required|length:10,500" />
      </FormKit>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
