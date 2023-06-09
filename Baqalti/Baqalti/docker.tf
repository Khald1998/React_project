
resource "docker_image" "addproducts" {
  name = "us-central1-docker.pkg.dev/${var.gcp_project}/${var.repository_name}/addproducts:latest"
  build {
    context    = "${path.module}/backend/Microservices/AddProducts/."
    dockerfile = "Dockerfile"
    no_cache   = true
  }
}
resource "docker_image" "login" {
  name = "us-central1-docker.pkg.dev/${var.gcp_project}/${var.repository_name}/login:latest"
  build {
    context    = "${path.module}/backend/Microservices/Login/."
    dockerfile = "Dockerfile"
    no_cache   = true
  }
}
resource "docker_image" "logout" {
  name = "us-central1-docker.pkg.dev/${var.gcp_project}/${var.repository_name}/logout:latest"
  build {
    context    = "${path.module}/backend/Microservices/Logout/."
    dockerfile = "Dockerfile"
    no_cache   = true
  }
}
resource "docker_image" "profile" {
  name = "us-central1-docker.pkg.dev/${var.gcp_project}/${var.repository_name}/profile:latest"
  build {
    context    = "${path.module}/backend/Microservices/Profile/."
    dockerfile = "Dockerfile"
    no_cache   = true
  }
}
resource "docker_image" "register" {
  name = "us-central1-docker.pkg.dev/${var.gcp_project}/${var.repository_name}/register:latest"
  build {
    context    = "${path.module}/backend/Microservices/Register/."
    dockerfile = "Dockerfile"
    no_cache   = true
  }
}
resource "docker_image" "viewproducts" {
  name = "us-central1-docker.pkg.dev/${var.gcp_project}/${var.repository_name}/viewproducts:latest"
  build {
    context    = "${path.module}/backend/Microservices/ViewProducts/."
    dockerfile = "Dockerfile"
    no_cache   = true
  }
}

resource "docker_image" "api_gateway" {
  name = "us-central1-docker.pkg.dev/${var.gcp_project}/${var.repository_name}/api-gateway:latest"
  build {
    context    = "${path.module}/backend/API_Gateway/."
    dockerfile = "Dockerfile"
    no_cache   = true
  }
}
resource "docker_image" "frontend" {
  name = "us-central1-docker.pkg.dev/${var.gcp_project}/${var.repository_name}/frontend:latest"
  build {
    context    = "${path.module}/frontend/."
    dockerfile = "Dockerfile"
    no_cache   = true
  }
}
#------------------------------------------------------
#------------------------------------------------------
#------------------------------------------------------


resource "docker_registry_image" "addproducts" {
  name          = docker_image.addproducts.name
  keep_remotely = true
  depends_on = [
    docker_image.addproducts
    ,google_artifact_registry_repository.main
  ]
}
resource "docker_registry_image" "login" {
  name          = docker_image.login.name
  keep_remotely = true
  depends_on = [
    docker_image.login
    ,google_artifact_registry_repository.main
  ]
}
resource "docker_registry_image" "logout" {
  name          = docker_image.logout.name
  keep_remotely = true
  depends_on = [
    docker_image.logout
    ,google_artifact_registry_repository.main
  ]
}

resource "docker_registry_image" "profile" {
  name          = docker_image.profile.name
  keep_remotely = true
  depends_on = [
    docker_image.profile
    ,google_artifact_registry_repository.main
  ]
}
resource "docker_registry_image" "register" {
  name          = docker_image.register.name
  keep_remotely = true
  depends_on = [
    docker_image.register
    ,google_artifact_registry_repository.main
  ]
}
resource "docker_registry_image" "viewproducts" {
  name          = docker_image.viewproducts.name
  keep_remotely = true
  depends_on = [
    docker_image.viewproducts
    ,google_artifact_registry_repository.main
  ]
}

resource "docker_registry_image" "api_gateway" {
  name          = docker_image.api_gateway.name
  keep_remotely = true
  depends_on = [
    docker_image.api_gateway
    ,google_artifact_registry_repository.main
  ]
}

resource "docker_registry_image" "frontend" {
  name          = docker_image.frontend.name
  keep_remotely = true
  depends_on = [
    docker_image.frontend
    ,google_artifact_registry_repository.main
  ]
}