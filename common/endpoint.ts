export default class ENDPONTAPI {
  static LOGIN = "/login";
  static REGISTER = "/register";
  static LOGOUT = "/logout";

  static UPDATE_USER = "/update-user";
  static LOAD_USER_BY_ID = "/load-user-by-id";
  static CHANGE_PASSWORD = "/change-password";

  static UPLOAD = "/upload";

  static GET_USER_FROM_TOKEN = "/get-user-from-token";


  // category 
  static GET_CATEGORYS_BY_STATUS = '/category/load-category-by-status'
  static UPDATE_CATEGORY = '/category/update-category'
  static ORDER_CATEGORY = '/category/order-category'
  static GET_CATEGORYS_BY_SLUG = '/category/getCategoryBySlug'

  // course 
  static GET_COURSES_BY_STATUS = '/course/load-course-by-status'
  static UPDATE_COURSE = '/course/update-course'
  static GET_COURSES_BY_ID_CATEGORY = '/course/load-course-by-id-category'
  static GET_COURSES_BY_ID_TAG_AND_CATEGORY = '/course/load-course-by-id-tag-and-category'
  static GET_COURSE_BY_SLUG = '/course/getCoursesBySlug'

  // lesson 
  static GET_LESSONS_BY_STATUS = '/lesson/load-lesson-by-status'
  static UPDATE_LESSON = '/lesson/update-lesson'

  // question 
  static GET_QUESTIONS_BY_STATUS = '/question/load-question-by-status'
  static UPDATE_QUESTION = '/question/update-question'
  static ORDER_QUESTION = '/question/orderQuestion'

  // tag 
  static GET_TAGS_BY_STATUS = '/tag/load-tag-by-status'
  static UPDATE_TAG = '/tag/update-tag'
  static GET_TAGS_BY_ID_CATEGORY = '/tag/load-tag-by-id-category'

  // topic 
  static GET_TOPICS_BY_STATUS = '/topic/load-topic-by-status'
  static GET_TOPICS_BY_ID_COURSE = '/topic/load-topic-by-id-course'
  static UPDATE_TOPIC = '/topic/update-topic'
  static GET_TOPICS_BY_PARENT_ID = '/topic/load-topic-by-parent-id'
  static GET_TOPIC_BY_COURSE = '/topic/getTopicByCourse'
  static ORDER_TOPIC = '/topic/orderTopic'
}
