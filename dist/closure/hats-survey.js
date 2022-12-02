goog.module('hats-survey');

const HaTSSurveyConfig = goog.require('hats-survey-config');
const HATS_API_KEY='AIzaSyDaoWAJaYsq3ER88uZjv6n5oADyRxBx4eI';

export class HaTSSurvey {
  constructor() {
    const html = document.querySelector('html');
    const lang = html.getAttribute('lang');
    const locale = html.getAttribute('locale');
    const path = html.getAttribute('path');
    const params = {'apiKey': HATS_API_KEY, 'locale': lang};
    const helpApi = window['help']['service']['Lazy']['create'](0, params);

    if (!helpApi) {
      window.console.warn('HaTS API not loaded.');
      return;
    };

    HaTSSurveyConfig.map((survey) => {
      let surveyPathRegex = null;
      if (survey.urlPathRegex) {
        surveyPathRegex = new RegExp(survey.urlPathRegex);
      }

      if ((survey.urlPath === path || path.match(surveyPathRegex)) &&
          survey.urlPathExcludes !== path &&
          survey.urlLocales.includes(locale)) {
        this.trigger(helpApi, survey.id, locale);
      }
    });
  }

  trigger(helpApi, surveyID, locale) {
    window.console.warn('New HaTS may be served with ID:', surveyID, locale);
    helpApi['requestSurvey']({
      'triggerId': surveyID,
      'enableTestingMode': false, // Will always trigger a survey. Do not set this 'true' in prod!
      'callback': (requestSurveyCallbackParam) => {
        if (!requestSurveyCallbackParam['surveyData']) {
          return;
        }
        helpApi['presentSurvey']({
          'surveyData': requestSurveyCallbackParam['surveyData'],
          'productData': {
            'customData': {
              'Locale': locale
            },
          },
          'colorScheme': 1, // Light
          'customZIndex': 10000,
        });
      },
    });
  };
}
