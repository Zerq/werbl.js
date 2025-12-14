function install_template() {
    cd $1
    npm install
    npm run build
    dotnet build
    cd ".."
    dotnet new install $1 --force
}

install_template "./werbelBasicApp"
install_template "./werblEsBuildInline"
install_template "./werblEsBuild"

echo "---installation complete---"