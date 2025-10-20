module BioAtomsCount

export countatoms

using BioSequences: 
complement,
isambiguous,
ACGT, ACGU, DNA, RNA,
SeqOrView, NucleicAcidAlphabet, AminoAcidAlphabet,
AA_A, AA_R, AA_N, AA_D, AA_C, AA_Q, AA_E, AA_G, AA_H, AA_I, AA_L, AA_K, AA_M, AA_F, AA_P, AA_S, AA_T, AA_W, AA_Y, AA_V, AA_O, AA_U

const AA22 = (AA_A, AA_R, AA_N, AA_D, AA_C, AA_Q, AA_E, AA_G, AA_H, AA_I, AA_L, AA_K, AA_M, AA_F, AA_P, AA_S, AA_T, AA_W, AA_Y, AA_V, AA_O, AA_U)

const AA20 = (AA_A, AA_R, AA_N, AA_D, AA_C, AA_Q, AA_E, AA_G, AA_H, AA_I, AA_L, AA_K, AA_M, AA_F, AA_P, AA_S, AA_T, AA_W, AA_Y, AA_V)

const DNAWEIGHTS = [
 #C H N O
  5 5 5 0; # Adenine
  4 5 3 1; # Cytosine
  5 5 5 1; # Guanine
  5 5 2 2; # Thymine
]

const RNAWEIGHTS = [
 #C H N O
  5 5 5 0; # Adenine
  4 5 3 1; # Cytosine
  5 5 5 1; # Guanine
  4 4 2 2; # Uracil
]

const AAWEIGHTS = [
# C  H  N  O  S
  3  7  1  2  0;  # A (Ala)
  6  14 4  2  0;  # R (Arg)
  4  8  2  3  0;  # N (Asn)
  4  7  1  4  0;  # D (Asp)
  3  7  1  2  1;  # C (Cys)
  5  9  1  4  0;  # Q (Gln)
  5  10 2  3  0;  # E (Glu)
  2  5  1  2  0;  # G (Gly)
  6  9  3  2  0;  # H (His)
  6  13 1  2  0;  # I (Ile)
  6  13 1  2  0;  # L (Leu)
  6  14 2  2  0;  # K (Lys)
  5  11 1  2  1;  # M (Met)
  9  11 1  2  0;  # F (Phe)
  5  9  1  2  0;  # P (Pro)
  3  7  1  3  0;  # S (Ser)
  4  9  1  3  0;  # T (Thr)
  11 12 2  2  0;  # W (Trp)
  9  11 1  3  0;  # Y (Tyr)
  5  11 1  2  0;  # V (Val)
  12 21 3  3  0;  # O (Pyl)
  3  7  1  2  1;  # U (Sec)
]

"""
    countatoms(seq::SeqOrView{<:NucleicAcidAlphabet})

Count the number of C, H, N, O atoms in a DNA or RNA sequence.
Returns a matrix where each row corresponds to a base and columns to atom types.
Throws an error if the sequence type is not DNA or RNA.
"""
function countatoms(seq::SeqOrView{<:NucleicAcidAlphabet{N}})::Matrix{Int64} where {N}
  
  if !(eltype(seq) == DNA || eltype(seq) == RNA)
    error("Unsupported nucleic acid type: $(eltype(seq)). Only DNA and RNA are supported.")
  end
  
  if findfirst(isambiguous, seq) !== nothing #hasambiguity(seq)
    error("Sequence contains ambiguous nucleotides. Molecular weight calculation is not supported for sequences with ambiguities.")
  end

  counts = Memory{Int64}(undef, 4)
  weights, alphabet = eltype(seq) == DNA ? (DNAWEIGHTS, ACGT) : (RNAWEIGHTS, ACGU)
  @inbounds for i in 1:4
    counts[i] = count(==(alphabet[i]), seq)
  end
  return weights .* counts
end

"""
    countatoms(seq::SeqOrView{AminoAcidAlphabet})

Count the number of C, H, N, O, S atoms in an amino acid sequence.
Returns a matrix where each row corresponds to an amino acid and columns to atom types.
"""
function countatoms(seq::SeqOrView{AminoAcidAlphabet})::Matrix{Int64}
  
  if findfirst(isambiguous, seq) !== nothing #hasambiguity(seq)
    error("Sequence contains ambiguous amino acids. Molecular weight calculation is not supported for sequences with ambiguities.")
  end

  counts = Memory{Int64}(undef, 22)
  @inbounds for i in 1:22
    counts[i] = count(==(AA22[i]), seq)
  end

  return AAWEIGHTS .* counts
end

end # module BioAtomsCount