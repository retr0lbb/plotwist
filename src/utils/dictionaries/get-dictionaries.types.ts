export type Dictionary = {
  home: {
    title: string
    description: string
    start: string
  }
  movies_list: {
    now_playing: string
    popular: string
    top_rated: string
    upcoming: string
    show_all: string
  }
  login_page: {
    title: string
    description: string
    no_account: string
    no_account_link: string
  }
  login_form: {
    email_label: string
    password_label: string
    show_password: string
    hide_password: string
    access_button: string

    email_required: string
    email_invalid: string
    password_required: string
    password_length: string

    login_success: string
    invalid_login_credentials: string
    try_again: string
  }
  sign_up_page: {
    title: string
    description: string
    already_have_account: string
    here_link: string
  }
  sign_up_form: {
    username_label: string
    email_label: string
    password_label: string
    show_password: string
    hide_password: string
    submit_button: string
    username_required: string
    email_required: string
    email_invalid: string
    password_required: string
    password_length: string
    sign_up_success: string
    invalid_sign_up_credentials: string
    try_again: string
  }
  app_page: {
    dashboard_title: string
    dashboard_description: string
    popular_movies_title: string
    popular_tv_shows_title: string
  }
  tabs: {
    reviews: string
    credits: string
    recommendations: string
    similar: string
    images: string
    videos: string

    seasons: string
  }
  navigation: {
    dashboard: string
    movies: string
    discover: string
    now_playing: string
    popular: string
    top_rated: string
    upcoming: string
    tv_shows: string
    airing_today: string
    on_the_air: string
    people: string
    lists: string
  }
  sidebar_search: {
    placeholder: string
    search_everything: string
    no_results: string
    movies: string
    tv_shows: string
    people: string
  }
  watch_providers: {
    label: string
    stream: string
    rent: string
    buy: string
  }
  lists_dropdown: {
    add_to_list: string
    my_lists: string
    removed_successfully: string
    added_successfully: string
    view_list: string
  }
  credits: {
    cast: string
    crew: string
  }
  review_form: {
    required: string
    rating_max: string
    success: string
    publish: string
    placeholder: string
  }
  review_item_actions: {
    like: string
    reply: string
    delete: string
    delete_success: string
  }
  movie_collection: {
    part_of: string
    see_collection: string
  }
  collection_list_dropdown: {
    add_collection_to_list: string
    my_lists: string
    collection_removed_successfully: string
    collection_added_successfully: string
    view_list: string
  }
  settings_dropdown: {
    theme: string
    light: string
    dark: string
    language: string
    account: string
    logout: string
  }
  auth: {
    logout_success: string
  }
  lists_page: {
    title: string
    description: string
  }
  list_card: {
    delete: string
    delete_success: string
  }
  create_new_list_form: {
    create_new_list: string
    name: string
    name_placeholder: string
    name_required: string
    description: string
    description_placeholder: string
    description_required: string
    submit: string
    list_created_success: string
  }
  list_page: {
    list_not_found: string
    see_your_lists_or_create_new: string
    here: string
  }
  list_items: {
    table: string
    grid: string
  }
  data_table: {
    title: string
    type: string
    overview: string
    added_at: string
    status: string
  }
  data_table_column_header: {
    asc: string
    desc: string
    hide: string
  }
  statuses: {
    pending: string
    watching: string
    watched: string
  }
  list_item_actions: {
    use_as_cover: string
    status: string
    delete: string
    removed_successfully: string
    cover_changed_successfully: string
  }
}
