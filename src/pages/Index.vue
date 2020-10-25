<template>
  <Layout>
    <main>
      <div
        class="relative flex items-center content-center justify-center pt-16 pb-32"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80");'
        >
          <span
            id="blackOverlay"
            class="absolute w-full h-full bg-black opacity-75"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
              <div class="pt-32 sm:pt-0">
                <h1 class="text-4xl font-semibold text-white">
                  {{ this.title }}
                </h1>
                <p class="mt-4 text-lg leading-relaxed text-gray-300">
                  {{ this.description }}
                </p>
                <g-link
                  to="/services/"
                  class="inline-block px-4 py-2 mt-8 font-semibold text-orange-600 bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent"
                >
                  Все наши услуги
                </g-link>
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
          style="height: 70px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100 0 0 1280 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 -mt-24 bg-gray-300">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center mt-24">
            <div class="w-full px-4 mt-24 ml-auto mr-auto md:w-5/12">
              <small class="text-orange-500 uppercase">Наши Ценности</small>
              <h3 class="mb-2 text-3xl font-semibold leading-normal">
                Индивидуальный подход
              </h3>
              <p
                class="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700"
              >
                Мы отлично понимаем, что наша репутация строится из
                положительных отзывов наших заказчиков и что единственная
                возможность добиться таких результатов- высокопрофессионально
                выполнять свою работу.
              </p>
              <p
                class="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700"
              >
                Разработанная нами модель работы основана на опыте участия в
                притязательных проектах, относящихся к различным промышленным
                направлениям.
              </p>
              <g-link
                to="/projects/"
                class="inline-block mb-8 font-semibold text-orange-600 hover:opacity-75"
              >
                Все наши проекты
                <font-awesome-icon
                  :icon="['fas', 'angle-double-right']"
                  class="leading-relaxed"
                />
              </g-link>
            </div>
            <div class="w-full px-4 ml-auto mr-auto md:w-4/12">
              <card-component
                :title="$page.project.title"
                :description="$page.project.description"
                :path="$page.project.path"
                :image="$page.project.featuredImage.src"
              ></card-component>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
          class="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100 0 0 1280 100"
            ></polygon>
          </svg>
        </div>
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 ml-auto mr-auto md:w-6/12">
              <div class="relative flex flex-wrap justify-center">
                <div class="w-full px-2 my-4 lg:w-6/12">
                  <div
                    class="px-4 py-8 text-center bg-gray-900 rounded-lg shadow-lg"
                  >
                    <p class="text-lg font-semibold text-white">
                      Геотехнический мониторинг
                    </p>
                    <p class="mt-2 text-base text-white opacity-75">
                      Выявление и предотвращение необратимых процессов в
                      грунтовых основаниях, а также деформаций зданий и
                      сооружений.
                    </p>
                  </div>
                  <div
                    class="px-4 py-8 mt-8 text-center bg-orange-500 rounded-lg shadow-lg"
                  >
                    <p class="text-lg font-semibold text-white">
                      Инженерные изыскания
                    </p>
                    <p class="mt-2 text-base text-white opacity-75">
                      Поиск наиболее рационального технико-экономического
                      решения при проектировании, строительстве, а также
                      реконструкции зданий.
                    </p>
                  </div>
                </div>
                <div
                  class="flex items-center w-full px-2 my-4 lg:w-6/12 lg:mt-16"
                >
                  <div
                    class="px-4 py-8 text-center bg-orange-600 rounded-lg shadow-lg"
                  >
                    <p class="text-lg font-semibold text-white">
                      Геодезические работы
                    </p>
                    <p class="mt-2 text-base text-white opacity-75">
                      Квалифицированная геодезическая поддержка при каждом этапе
                      возведения здания. Контроль качества и безопасности
                      выполнения строительно-монтажных работ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 mt-8 ml-auto mr-auto md:w-5/12">
              <div class="md:pr-12">
                <small class="text-orange-500 uppercase">Наша Компания</small>
                <h3 class="text-3xl font-semibold">Почему мы?</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  UPGEO - одна из ведущих геодезических компаний России,
                  специализация которой, направлена на выполнение высокоточных
                  работ в области инженерной геодезии.
                </p>
                <ul class="pb-6 mt-6 list-none">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="inline-block px-2 py-1 mr-3 text-xs font-semibold text-orange-600 uppercase bg-orange-200 rounded-full"
                        >
                          <font-awesome-icon :icon="['fas', 'award']" />
                        </span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Высокий уровень специалистов
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="inline-block px-2 py-1 mr-3 text-xs font-semibold text-orange-600 uppercase bg-orange-200 rounded-full"
                        >
                          <font-awesome-icon :icon="['fas', 'lightbulb']" />
                        </span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Современные технологии и оборудование
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="inline-block px-2 py-1 mr-3 text-xs font-semibold text-orange-600 uppercase bg-orange-200 rounded-full"
                        >
                          <font-awesome-icon :icon="['fas', 'business-time']" />
                        </span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Огромный опыт наработанный годами
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="inline-block px-2 py-1 mr-3 text-xs font-semibold text-orange-600 uppercase bg-orange-200 rounded-full"
                        >
                          <font-awesome-icon :icon="['fas', 'stamp']" />
                        </span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Соблюдение всех правил документации
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <g-link
                  to="/services/"
                  class="font-bold text-gray-800 hover:text-gray-600"
                  style="transition:all .15s ease"
                  >Посмотреть наши услуги
                  <font-awesome-icon
                    :icon="['fas', 'angle-double-right']"
                    class="leading-relaxed"
                  />
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-20 pb-48">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap justify-center mb-24 text-center">
            <div class="w-full px-4 lg:w-6/12">
              <h2 class="text-4xl font-semibold">Среди наши партнеров</h2>
              <p class="m-4 text-lg leading-relaxed text-gray-600">
                Сегодня мы успешно сотрудничаем как с российскими, так и с
                иностранными строительными и проектными компаниями.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="Nokian Tyres logo"
                  src="~/assets/img/Logo-Nokian-Tyres.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="Bonava logo"
                  src="~/assets/img/Logo-Bonava.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="Балтийский терминал удобрений логотип"
                  src="~/assets/img/Logo-BFT.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="StroiGemini logo"
                  src="~/assets/img/Logo-StroiGemini.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="Kvaerner logo"
                  src="~/assets/img/Logo-Kvaerner.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="Renaissance logo"
                  src="~/assets/img/Logo-Renaissance.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="Lemminkainen logo"
                  src="~/assets/img/Logo-Lemminkainen.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="Hansastroi logo"
                  src="~/assets/img/Logo-Hansastroi.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="Lenstroytrest logo"
                  src="~/assets/img/Logo-Lenstroytrest.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="Hochtief logo"
                  src="~/assets/img/Logo-Hochtief.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="YIT logo"
                  src="~/assets/img/Logo-YIT.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="SRV logo"
                  src="~/assets/img/Logo-SRV.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
            <div class="mb-8 md:w-3/12 lg:w-2/12 lg:mb-2">
              <div class="px-6">
                <g-image
                  alt="HplusH logo"
                  src="~/assets/img/Logo-HplusH.jpg"
                  class="max-w-full mx-auto"
                  style="max-width: 120px;"
                  width="250"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block pt-20 pb-20 bg-gray-900">
        <div
          class="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100 0 0 1280 100"
            ></polygon>
          </svg>
        </div>
        <div id="contacts" class="container px-4 mx-auto lg:pt-24 lg:pb-48">
          <div class="flex flex-wrap justify-center text-center">
            <div class="w-full px-4 lg:w-6/12">
              <h2 class="text-4xl font-semibold text-white">
                Свяжитесь с нами
              </h2>
              <p class="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
                Основной миссией нашей компании является: высокий
                профессионализм при выполнении работ. Мы будем рады
                сотрудничеству и развитию долгосрочных партнерских отношений.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap justify-center mt-12 mb-12">
            <div class="w-full px-4 py-4 text-center lg:w-3/12">
              <div
                class="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg"
              >
                <font-awesome-icon :icon="['fas', 'globe']" class="text-xl" />
              </div>
              <h5
                class="mt-5 text-xl font-semibold text-white hover:opacity-75"
              >
                <g-link to="/">www.upgeo.ru</g-link>
              </h5>
            </div>
            <div class="w-full px-4 py-4 text-center lg:w-3/12">
              <div
                class="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg"
              >
                <font-awesome-icon :icon="['fas', 'phone']" class="text-xl" />
              </div>
              <h5
                class="mt-5 text-xl font-semibold text-white hover:opacity-75"
              >
                <a href="tel:+78126681277">(812) 66-812-77</a>
              </h5>
            </div>
            <div class="w-full px-4 py-4 text-center lg:w-3/12">
              <div
                class="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg"
              >
                <font-awesome-icon
                  :icon="['fas', 'envelope']"
                  class="text-xl"
                />
              </div>
              <h5
                class="mt-5 text-xl font-semibold text-white hover:opacity-75"
              >
                <a href="mailto:office@upgeo.ru">office@upgeo.ru</a>
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 bg-gray-900 lg:pt-0">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap justify-center -mt-48 lg:-mt-64">
            <div class="w-full px-4 lg:w-6/12">
              <div
                class="relative z-10 flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 rounded-lg shadow-lg"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">Возникли вопросы?</h4>
                  <p class="mt-1 mb-4 leading-relaxed text-gray-600">
                    Пожалуйста, заполните форму ниже, чтобы наши специалисты
                    связались с вами в ближайшее время.
                  </p>
                  <form
                    name="contact-form"
                    method="post"
                    v-on:submit.prevent="handleSubmit"
                    action="/success/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <div class="relative w-full mt-8 mb-3">
                      <input
                        type="hidden"
                        name="form-name"
                        value="contact-form"
                      />
                      <p hidden>
                        <label>
                          Не заполнять: <input name="bot-field" />
                        </label>
                      </p>
                    </div>
                    <div class="relative w-full mt-8 mb-3">
                      <label
                        for="name"
                        class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                      >
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        name="name"
                        v-model="formData.name"
                        placeholder="Фамилия Имя"
                        class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                        style="transition: all 0.15s ease 0s;"
                        required
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        for="email"
                        class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                      >
                        Ваш e-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        v-model="formData.email"
                        placeholder="my@email.com"
                        class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                        style="transition: all 0.15s ease 0s;"
                        required
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        for="message"
                        class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                      >
                        Сообщение
                      </label>
                      <textarea
                        name="message"
                        v-model="formData.message"
                        placeholder="Ваше сообщение..."
                        rows="4"
                        cols="80"
                        class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                        required
                      ></textarea>
                    </div>
                    <div class="mt-6 text-center">
                      <button
                        type="submit"
                        class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                        style="transition: all 0.15s ease 0s;"
                      >
                        Отправить
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="height: 600px; transform: translateZ(0px);"
          class="absolute bottom-0 left-0 right-0 top-auto w-full -mt-20 overflow-hidden pointer-events-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            x="0"
            y="0"
            class="absolute bottom-0 overflow-hidden"
            viewBox="0 0 2560 600"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 600 0 600 0 200"
            ></polygon>
          </svg>
        </div>
      </section>
    </main>
  </Layout>
</template>

<page-query>
query {
  project: projectPage(id: "a248008bee0c9340139b3d890830be12") {
    title
    path
    description
    featuredImage(width: 350)
    content
  }
}
</page-query>

<script>
import CardComponent from '~/components/Card';

export default {
  components: { CardComponent },
  data() {
    return {
      title: 'Геодезическое сопровождение',
      description:
        'Широкий спектр топографо-геодезических услуг и инженерных изысканий',
      formData: {},
    };
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push('/success'))
        .catch((error) => alert(error));
    },
  },
};
</script>

<style></style>
