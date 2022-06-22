<template>
  <div>
    <!-- Navigation -->
    <AppBar>
      <AppBarTitle> Vue Starter </AppBarTitle>
      <Spacer />
      <Button>
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
