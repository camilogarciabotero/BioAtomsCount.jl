module BioAtomsCountTests

using BioSequences, BioAtomsCount

using Aqua
using Test
using TestItems
using TestItemRunner
using JET

@run_package_tests
@testitem "countatoms" begin
    using BioSequences, BioAtomsCount
    
    sorteddna = dna"ACGT"
    sortedaa = aa"ARNDCQEGHILKMFPSTWYV"

    @test countatoms(sorteddna) == BioAtomsCount.dnaweights
    @test countatoms(sortedaa) == BioAtomsCount.aaweights
end # BioAtomsCount.jl tests

@testitem "Code quality" begin
    using Aqua
    Aqua.test_all(
        BioAtomsCount; ambiguities=false, deps_compat=(check_extras=false,)
    )
end

@testitem "Code linting" begin
    using JET
    JET.test_package(BioAtomsCount; target_defined_modules=true)
end

end # module BioAtomsCountTests