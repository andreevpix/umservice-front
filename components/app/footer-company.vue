<template>
  <div class="footer_company">
          <AppLogo :color="false" />
          <p class="footer_company__description">
            Группа компаний «Умный сервис» прилагает все усилия, чтобы гарантировать точность и актуальность информации,
            представленной на этом сайте. Однако, мы не можем гарантировать абсолютную точность и полноту данных.
          </p>
          <p class="footer_company__description">
            Администрация сайта сохраняет за собой право изменять содержание сайта в любое время и по собственному
            решению. Копирование и распространение любой текстово-графической информации, размещенной на сайте
            umserv.ru, является нарушением авторских прав и влечет за собой правовые последствия
          </p>
          <span class="footer_company__copyright">
            &copy; Умный сервис 2013-2024 | Карта сайта
          </span>
        </div>
</template>

<style lang="scss">
.footer_company {
  margin-inline-end: 60px;

  &__description {
    $fontSize: 12px;

    margin-block-start: 9px;

    font-size: $fontSize;
    letter-spacing: calc((0.4px * $fontSize) / 100px);

    &:first-of-type {
      margin-block-start: 16px;
    }

    &:last-of-type {
      margin-block-end: 16px;
    }
  }

  &__copyright {
    $fontSize: 12px;

    font-size: $fontSize;
    font-weight: 500;
    letter-spacing: calc((0.25px * $fontSize) / 100px);
  }
}
</style>
