module BioAtomsCountTests

using BioAtomsCount
using BioSequences
using VectorizedKmers

using Aqua
using Test
using TestItems
using TestItemRunner
using JET

@run_package_tests
@testitem "countatoms" begin
    using BioSequences, BioAtomsCount
    
    sorteddna = dna"ACGT"
    sortedrna = rna"ACGU"
    sortedaa = aa"ARNDCQEGHILKMFPSTWYV"

    @test countatoms(sorteddna) == BioAtomsCount.DNAWEIGHTS
    @test countatoms(sortedrna) == BioAtomsCount.RNAWEIGHTS
    @test countatoms(sortedaa) == BioAtomsCount.AAWEIGHTS
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