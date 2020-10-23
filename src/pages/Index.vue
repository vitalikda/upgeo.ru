<template>
  <Layout>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pt-32 sm:pt-0">
                <h2 class="text-white font-semibold text-4xl">
                  Геодезическое сопровождение
                </h2>
                <p class="mt-4 text-lg leading-relaxed text-gray-300">
                  Широкий спектр топографо-геодезических услуг и инженерных
                  изысканий.
                </p>
                <g-link
                  to="/services/"
                  class="inline-block mt-8 bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent"
                >
                  Все наши услуги
                </g-link>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
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
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center mt-24">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto mt-24">
              <small class="text-orange-500 uppercase">Наши Ценности</small>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Индивидуальный подход
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                Мы отлично понимаем, что наша репутация строится из
                положительных отзывов наших заказчиков и что единственная
                возможность добиться таких результатов- высокопрофессионально
                выполнять свою работу.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                Разработанная нами модель работы основана на опыте участия в
                притязательных проектах, относящихся к различным промышленным
                направлениям.
              </p>
              <g-link
                to="/projects/"
                class="inline-block mb-8 text-orange-600 font-semibold hover:opacity-75"
              >
                Все наши проекты
                <font-awesome-icon
                  :icon="['fas', 'angle-double-right']"
                  class="leading-relaxed"
                />
              </g-link>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mt-6 mb-6 shadow-lg rounded-lg bg-orange-600"
              >
                <g-image
                  alt="UPGEO Project Sahalin 2"
                  src="~/assets/img/Project-Sahalin-2.jpg"
                  class="w-full align-middle rounded-t-lg"
                  width="500"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-orange-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    о. Сахалин
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Например, мы участвовали в строительстве первого в России
                    бетонного основания гравитационного типа для шельфа на о.
                    Сахалин.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
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
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-6/12 px-4 mr-auto ml-auto">
              <div class="justify-center flex flex-wrap relative">
                <div class="my-4 px-2 w-full lg:w-6/12">
                  <div
                    class="bg-gray-900 shadow-lg rounded-lg text-center px-4 py-8"
                  >
                    <p class="text-lg text-white font-semibold">
                      Геотехнический мониторинг
                    </p>
                    <p class="text-base text-white opacity-75 mt-2">
                      Выявление и предотвращение необратимых процессов в
                      грунтовых основаниях, а также деформаций зданий и
                      сооружений.
                    </p>
                  </div>
                  <div
                    class="bg-orange-500 shadow-lg rounded-lg text-center px-4 py-8 mt-8"
                  >
                    <p class="text-lg text-white font-semibold">
                      Инженерные изыскания
                    </p>
                    <p class="text-base text-white opacity-75 mt-2">
                      Поиск наиболее рационального технико-экономического
                      решения при проектировании, строительстве, а также
                      реконструкции зданий.
                    </p>
                  </div>
                </div>
                <div
                  class="flex items-center my-4 w-full lg:w-6/12 px-2 lg:mt-16"
                >
                  <div
                    class="bg-orange-600 shadow-lg rounded-lg text-center px-4 py-8"
                  >
                    <p class="text-lg text-white font-semibold">
                      Геодезические работы
                    </p>
                    <p class="text-base text-white opacity-75 mt-2">
                      Квалифицированная геодезическая поддержка при каждом этапе
                      возведения здания. Контроль качества и безопасности
                      выполнения строительно-монтажных работ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4 mt-8">
              <div class="md:pr-12">
                <small class="text-orange-500 uppercase">Наша Компания</small>
                <h3 class="text-3xl font-semibold">Почему мы?</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  UPGEO - одна из ведущих геодезических компаний России,
                  специализация которой, направлена на выполнение высокоточных
                  работ в области инженерной геодезии.
                </p>
                <ul class="list-none mt-6 pb-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 mr-3"
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
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 mr-3"
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
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 mr-3"
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
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 mr-3"
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
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Среди наши партнеров</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                Сегодня мы успешно сотрудничаем как с российскими, так и с
                иностранными строительными и проектными компаниями.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
            <div class="md:w-3/12 lg:w-2/12 lg:mb-2 mb-8">
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
      <section class="pt-20 pb-20 relative block bg-gray-900">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
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
        <div id="contacts" class="container mx-auto px-4 lg:pt-24 lg:pb-48">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">
                Свяжитесь с нами
              </h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Основной миссией нашей компании является: высокий
                профессионализм при выполнении работ. Мы будем рады
                сотрудничеству и развитию долгосрочных партнерских отношений.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 mb-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 py-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <font-awesome-icon :icon="['fas', 'globe']" class="text-xl" />
              </div>
              <h5
                class="text-xl mt-5 font-semibold text-white hover:opacity-75"
              >
                <g-link to="/">www.upgeo.ru</g-link>
              </h5>
            </div>
            <div class="w-full lg:w-3/12 px-4 py-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <font-awesome-icon :icon="['fas', 'phone']" class="text-xl" />
              </div>
              <h5
                class="text-xl mt-5 font-semibold text-white hover:opacity-75"
              >
                <a href="tel:+78126681277">(812) 66-812-77</a>
              </h5>
            </div>
            <div class="w-full lg:w-3/12 px-4 py-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <font-awesome-icon
                  :icon="['fas', 'envelope']"
                  class="text-xl"
                />
              </div>
              <h5
                class="text-xl mt-5 font-semibold text-white hover:opacity-75"
              >
                <a href="mailto:office@upgeo.ru">office@upgeo.ru</a>
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="z-10 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">Возникли вопросы?</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
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
                    <div class="relative w-full mb-3 mt-8">
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
                    <div class="relative w-full mb-3 mt-8">
                      <label
                        for="name"
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      >
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        name="name"
                        v-model="formData.name"
                        placeholder="Фамилия Имя"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        style="transition: all 0.15s ease 0s;"
                        required
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        for="email"
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      >
                        Ваш e-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        v-model="formData.email"
                        placeholder="my@email.com"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        style="transition: all 0.15s ease 0s;"
                        required
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        for="message"
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      >
                        Сообщение
                      </label>
                      <textarea
                        name="message"
                        v-model="formData.message"
                        placeholder="Ваше сообщение..."
                        rows="4"
                        cols="80"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        required
                      ></textarea>
                    </div>
                    <div class="text-center mt-6">
                      <button
                        type="submit"
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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
          class="bottom-0 top-auto left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
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

<script>
export default {
  metaInfo: {
    title: 'Геодезическое сопровождение',
  },
  data() {
    return {
      formData: {},
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
