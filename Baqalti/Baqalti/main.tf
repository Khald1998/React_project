resource "google_artifact_registry_repository" "main" {
  location      = "us-central1"
  repository_id = var.repository_name
  description   = "docker repository"
  format        = "DOCKER"
}
#------------------------------------------------------
#------------------------------------------------------
#------------------------------------------------------

resource "google_cloud_run_v2_service" "addproducts" {
  name     = "addproducts"
  location = "us-central1"


  template {
    containers {
      image = docker_image.addproducts.name
      env {
        name  = "MONGO_URL"
        value = "mongodb+srv://myapp:myapp123123@tcoc.ii33cir.mongodb.net/"
      }
      env {
        name  = "SECRET"
        value = "SECRET"
      }
      ports {
        container_port = 7005
      }
    }
  }

  depends_on = [
    google_artifact_registry_repository.main
    , docker_image.addproducts
    , docker_registry_image.addproducts
  ]
}

resource "google_cloud_run_v2_service" "login" {
  name     = "login"
  location = "us-central1"


  template {
    containers {
      image = docker_image.login.name
      env {
        name  = "MONGO_URL"
        value = "mongodb+srv://myapp:myapp123123@tcoc.ii33cir.mongodb.net/"
      }
      env {
        name  = "SECRET"
        value = "SECRET"
      }
      ports {
        container_port = 7002
      }
    }
  }

  depends_on = [
    google_artifact_registry_repository.main
    , docker_image.login
    , docker_registry_image.login
  ]
}

resource "google_cloud_run_v2_service" "logout" {
  name     = "logout"
  location = "us-central1"


  template {
    containers {
      image = docker_image.logout.name
      ports {
        container_port = 7004
      }
    }
  }

  depends_on = [
    google_artifact_registry_repository.main
    , docker_image.logout
    , docker_registry_image.logout
  ]
}
resource "google_cloud_run_v2_service" "profile" {
  name     = "profile"
  location = "us-central1"


  template {
    containers {
      image = docker_image.profile.name
      env {
        name  = "MONGO_URL"
        value = "mongodb+srv://myapp:myapp123123@tcoc.ii33cir.mongodb.net/"
      }
      env {
        name  = "SECRET"
        value = "SECRET"
      }
      ports {
        container_port = 7003
      }
    }
  }

  depends_on = [
    google_artifact_registry_repository.main
    , docker_image.profile
    , docker_registry_image.profile
  ]
}
resource "google_cloud_run_v2_service" "register" {
  name     = "register"
  location = "us-central1"


  template {
    containers {
      image = docker_image.register.name
      env {
        name  = "MONGO_URL"
        value = "mongodb+srv://myapp:myapp123123@tcoc.ii33cir.mongodb.net/"
      }

      ports {
        container_port = 7001
      }
    }
  }

  depends_on = [
    google_artifact_registry_repository.main
    , docker_image.register
    , docker_registry_image.register
  ]
}
resource "google_cloud_run_v2_service" "viewproducts" {
  name     = "viewproducts"
  location = "us-central1"


  template {
    containers {
      image = docker_image.viewproducts.name
      env {
        name  = "MONGO_URL"
        value = "mongodb+srv://myapp:myapp123123@tcoc.ii33cir.mongodb.net/"
      }
      ports {
        container_port = 7006
      }
    }
  }

  depends_on = [
    google_artifact_registry_repository.main
    , docker_image.viewproducts
    , docker_registry_image.viewproducts
  ]
}

resource "google_cloud_run_v2_service" "api_gateway" {
  name     = "apigateway"
  location = "us-central1"


  template {
    containers {
      image = docker_image.api_gateway.name
      env {
        name  = "REGISTER"
        value = google_cloud_run_v2_service.register.uri
      }
      env {
        name  = "LOGIN"
        value = google_cloud_run_v2_service.login.uri
      }
      env {
        name  = "LOGOUT"
        value = google_cloud_run_v2_service.logout.uri
      }
      env {
        name  = "PROFILE"
        value = google_cloud_run_v2_service.profile.uri
      }
      env {
        name  = "ADD"
        value = google_cloud_run_v2_service.addproducts.uri
      }
      env {
        name  = "VIEW"
        value = google_cloud_run_v2_service.viewproducts.uri
      }
      ports {
        container_port = 8080
      }
    }
  }

  depends_on = [
    google_artifact_registry_repository.main
    , docker_image.api_gateway
    , docker_registry_image.api_gateway
    , google_cloud_run_v2_service.addproducts
    , google_cloud_run_v2_service.login
    , google_cloud_run_v2_service.logout
    , google_cloud_run_v2_service.profile
    , google_cloud_run_v2_service.register
    , google_cloud_run_v2_service.viewproducts
  ]
}


resource "google_cloud_run_v2_service" "frontend" {
  name     = "frontend"
  location = "us-central1"


  template {
    containers {
      image = docker_image.frontend.name
      env {
        name  = "VITE_URL"
        value = google_cloud_run_v2_service.api_gateway.uri
      }
      ports {
        container_port = 3000
      }
    }
  }

  depends_on = [
    google_artifact_registry_repository.main
    , docker_image.frontend
    , docker_registry_image.frontend
    , google_cloud_run_v2_service.api_gateway
  ]
}
