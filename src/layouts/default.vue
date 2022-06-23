<template>
  <div>
    <!-- Navigation -->
    <AppBar>
      <AppBarTitle> Vue Starter </AppBarTitle>
      <Spacer />
      <Button
        href="https://github.com/hasan-almujtaba/vue-starter"
        target="_blank"
      >
        <IMdiGithub class="w-[18px] h-[18px]" />
        View on Github
      </Button>
    </AppBar>
    <!-- Navigation -->

    <!-- Page Content -->
    <RouterView />
    <!-- Page Content -->

    <!-- Dark Mode Button -->
    <ToggleDarkMode />
    <!-- Dark Mode Button -->
  </div>
</template>
