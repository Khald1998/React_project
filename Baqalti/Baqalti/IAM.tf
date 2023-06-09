data "google_iam_policy" "addproducts" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_v2_service_iam_policy" "addproducts" {
  location = google_cloud_run_v2_service.addproducts.location
  project  = google_cloud_run_v2_service.addproducts.project
  name     = google_cloud_run_v2_service.addproducts.name

  policy_data = data.google_iam_policy.addproducts.policy_data
  depends_on = [
    data.google_iam_policy.addproducts
    , google_cloud_run_v2_service.addproducts
  ]
}

data "google_iam_policy" "login" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_v2_service_iam_policy" "login" {
  location = google_cloud_run_v2_service.login.location
  project  = google_cloud_run_v2_service.login.project
  name     = google_cloud_run_v2_service.login.name

  policy_data = data.google_iam_policy.login.policy_data
  depends_on = [
    data.google_iam_policy.login
    , google_cloud_run_v2_service.login
  ]
}

data "google_iam_policy" "logout" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_v2_service_iam_policy" "logout" {
  location = google_cloud_run_v2_service.logout.location
  project  = google_cloud_run_v2_service.logout.project
  name     = google_cloud_run_v2_service.logout.name

  policy_data = data.google_iam_policy.logout.policy_data
  depends_on = [
    data.google_iam_policy.logout
    , google_cloud_run_v2_service.logout
  ]
}

data "google_iam_policy" "profile" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_v2_service_iam_policy" "profile" {
  location = google_cloud_run_v2_service.profile.location
  project  = google_cloud_run_v2_service.profile.project
  name     = google_cloud_run_v2_service.profile.name

  policy_data = data.google_iam_policy.profile.policy_data
  depends_on = [
    data.google_iam_policy.profile
    , google_cloud_run_v2_service.profile
  ]
}

data "google_iam_policy" "register" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_v2_service_iam_policy" "register" {
  location = google_cloud_run_v2_service.register.location
  project  = google_cloud_run_v2_service.register.project
  name     = google_cloud_run_v2_service.register.name

  policy_data = data.google_iam_policy.register.policy_data
  depends_on = [
    data.google_iam_policy.register
    , google_cloud_run_v2_service.register
  ]
}

data "google_iam_policy" "viewproducts" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_v2_service_iam_policy" "viewproducts" {
  location = google_cloud_run_v2_service.viewproducts.location
  project  = google_cloud_run_v2_service.viewproducts.project
  name     = google_cloud_run_v2_service.viewproducts.name

  policy_data = data.google_iam_policy.viewproducts.policy_data
  depends_on = [
    data.google_iam_policy.viewproducts
    , google_cloud_run_v2_service.viewproducts
  ]
}

data "google_iam_policy" "api_gateway" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_v2_service_iam_policy" "api_gateway" {
  location = google_cloud_run_v2_service.api_gateway.location
  project  = google_cloud_run_v2_service.api_gateway.project
  name     = google_cloud_run_v2_service.api_gateway.name

  policy_data = data.google_iam_policy.api_gateway.policy_data
  depends_on = [
    data.google_iam_policy.api_gateway
    , google_cloud_run_v2_service.api_gateway
  ]
}


data "google_iam_policy" "frontend" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_v2_service_iam_policy" "frontend" {
  location = google_cloud_run_v2_service.frontend.location
  project  = google_cloud_run_v2_service.frontend.project
  name     = google_cloud_run_v2_service.frontend.name

  policy_data = data.google_iam_policy.frontend.policy_data
  depends_on = [
    data.google_iam_policy.frontend
    , google_cloud_run_v2_service.frontend
  ]
}

