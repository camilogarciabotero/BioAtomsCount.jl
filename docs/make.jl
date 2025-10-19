using Documenter
using DocumenterVitepress
using BioAtomsCount

DocMeta.setdocmeta!(BioAtomsCount, :DocTestSetup, :(using BioAtomsCount); recursive = true)

makedocs(;
    modules = [BioAtomsCount],
    authors = "Camilo García-Botero",
    repo = "https://github.com/camilogarciabotero/BioAtomsCount.jl",
    sitename = "BioAtomsCount.jl",
    format = DocumenterVitepress.MarkdownVitepress(
        repo = "https://github.com/camilogarciabotero/BioAtomsCount.jl"
    ),
    pages = [
        "Home" => "index.md",
    ],
    warnonly = true,
)

DocumenterVitepress.deploydocs(; repo = "https://github.com/camilogarciabotero/BioAtomsCount.jl", devbranch = "main")
