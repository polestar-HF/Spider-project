import math
import random

import numpy as np
import matplotlib.pyplot as plt

trail_1 = [
    [
        4,
        -1,
        75
    ],
    [
        5,
        -1,
        93
    ],
    [
        6,
        -1,
        105
    ],
    [
        7,
        -1,
        122
    ],
    [
        8,
        -1,
        131
    ],
    [
        9,
        -1,
        137
    ],
    [
        10,
        -1,
        145
    ],
    [
        11,
        -2,
        152
    ],
    [
        13,
        -2,
        160
    ],
    [
        14,
        -2,
        167
    ],
    [
        15,
        -2,
        174
    ],
    [
        16,
        -2,
        184
    ],
    [
        18,
        -2,
        191
    ],
    [
        19,
        -2,
        200
    ],
    [
        20,
        -2,
        206
    ],
    [
        22,
        -2,
        215
    ],
    [
        23,
        -2,
        221
    ],
    [
        24,
        -2,
        235
    ],
    [
        25,
        -2,
        238
    ],
    [
        27,
        -2,
        246
    ],
    [
        28,
        -2,
        254
    ],
    [
        29,
        -2,
        262
    ],
    [
        30,
        -2,
        268
    ],
    [
        31,
        -2,
        284
    ],
    [
        32,
        -2,
        292
    ],
    [
        33,
        -2,
        307
    ],
    [
        34,
        -2,
        374
    ],
    [
        35,
        -2,
        383
    ],
    [
        36,
        -2,
        394
    ],
    [
        38,
        -2,
        399
    ],
    [
        39,
        -2,
        412
    ],
    [
        40,
        -2,
        415
    ],
    [
        41,
        -2,
        424
    ],
    [
        43,
        -2,
        431
    ],
    [
        44,
        -2,
        442
    ],
    [
        45,
        -2,
        446
    ],
    [
        46,
        -2,
        457
    ],
    [
        48,
        -2,
        462
    ],
    [
        49,
        -2,
        472
    ],
    [
        50,
        -2,
        476
    ],
    [
        52,
        -2,
        487
    ],
    [
        53,
        -2,
        492
    ],
    [
        54,
        -2,
        503
    ],
    [
        55,
        -2,
        508
    ],
    [
        56,
        -2,
        518
    ],
    [
        57,
        -2,
        524
    ],
    [
        58,
        -2,
        534
    ],
    [
        60,
        -2,
        550
    ],
    [
        61,
        -2,
        556
    ],
    [
        64,
        -2,
        578
    ],
    [
        65,
        -2,
        585
    ],
    [
        67,
        -2,
        597
    ],
    [
        68,
        -2,
        601
    ],
    [
        69,
        -2,
        613
    ],
    [
        70,
        -2,
        628
    ],
    [
        71,
        -2,
        637
    ],
    [
        73,
        -2,
        653
    ],
    [
        74,
        -2,
        662
    ],
    [
        75,
        -2,
        669
    ],
    [
        76,
        -2,
        677
    ],
    [
        79,
        -2,
        683
    ],
    [
        80,
        -2,
        693
    ],
    [
        82,
        -2,
        699
    ],
    [
        83,
        -2,
        710
    ],
    [
        85,
        -2,
        717
    ],
    [
        86,
        -2,
        726
    ],
    [
        87,
        -2,
        755
    ],
    [
        88,
        -2,
        782
    ],
    [
        89,
        -2,
        800
    ],
    [
        91,
        -2,
        806
    ],
    [
        92,
        -2,
        815
    ],
    [
        93,
        -2,
        821
    ],
    [
        94,
        -2,
        832
    ],
    [
        96,
        -2,
        838
    ],
    [
        97,
        -2,
        847
    ],
    [
        98,
        -2,
        854
    ],
    [
        99,
        -2,
        861
    ],
    [
        100,
        -2,
        870
    ],
    [
        101,
        -2,
        878
    ],
    [
        102,
        -2,
        884
    ],
    [
        103,
        -2,
        892
    ],
    [
        104,
        -2,
        916
    ],
    [
        105,
        -2,
        920
    ],
    [
        106,
        -2,
        940
    ],
    [
        107,
        -2,
        962
    ],
    [
        108,
        -2,
        1031
    ],
    [
        109,
        -2,
        1047
    ],
    [
        111,
        -2,
        1056
    ],
    [
        112,
        -2,
        1082
    ],
    [
        113,
        -2,
        1137
    ],
    [
        114,
        -2,
        1154
    ],
    [
        115,
        -2,
        1172
    ],
    [
        116,
        -2,
        1194
    ],
    [
        117,
        -2,
        1209
    ],
    [
        118,
        -3,
        1218
    ],
    [
        119,
        -3,
        1227
    ],
    [
        121,
        -3,
        1241
    ],
    [
        122,
        -4,
        1252
    ],
    [
        123,
        -4,
        1258
    ],
    [
        125,
        -4,
        1268
    ],
    [
        126,
        -4,
        1274
    ],
    [
        127,
        -4,
        1283
    ],
    [
        128,
        -4,
        1288
    ],
    [
        129,
        -4,
        1303
    ],
    [
        130,
        -4,
        1321
    ],
    [
        131,
        -4,
        1335
    ],
    [
        132,
        -5,
        1357
    ],
    [
        133,
        -5,
        1372
    ],
    [
        134,
        -5,
        1380
    ],
    [
        135,
        -5,
        1389
    ],
    [
        136,
        -5,
        1394
    ],
    [
        138,
        -5,
        1409
    ],
    [
        139,
        -5,
        1434
    ],
    [
        140,
        -5,
        1556
    ],
    [
        140,
        -6,
        1583
    ],
    [
        141,
        -6,
        1597
    ],
    [
        142,
        -6,
        1601
    ],
    [
        143,
        -6,
        1642
    ],
    [
        144,
        -6,
        1744
    ],
    [
        145,
        -6,
        1822
    ],
    [
        146,
        -6,
        2111
    ],
    [
        146,
        -7,
        2163
    ],
    [
        147,
        -7,
        2178
    ],
    [
        148,
        -7,
        2199
    ],
    [
        148,
        -8,
        2207
    ],
    [
        149,
        -8,
        2442
    ],
    [
        149,
        -9,
        2556
    ]
]
trail_2 = [
    [
        4,
        1,
        110
    ],
    [
        9,
        4,
        146
    ],
    [
        10,
        4,
        152
    ],
    [
        12,
        4,
        157
    ],
    [
        13,
        4,
        171
    ],
    [
        15,
        4,
        180
    ],
    [
        16,
        4,
        195
    ],
    [
        17,
        4,
        211
    ],
    [
        18,
        4,
        220
    ],
    [
        19,
        4,
        228
    ],
    [
        21,
        4,
        235
    ],
    [
        23,
        4,
        249
    ],
    [
        24,
        4,
        257
    ],
    [
        25,
        4,
        270
    ],
    [
        26,
        4,
        273
    ],
    [
        28,
        4,
        282
    ],
    [
        29,
        4,
        289
    ],
    [
        31,
        4,
        305
    ],
    [
        32,
        4,
        321
    ],
    [
        33,
        4,
        336
    ],
    [
        34,
        4,
        415
    ],
    [
        35,
        4,
        446
    ],
    [
        36,
        4,
        465
    ],
    [
        37,
        4,
        481
    ],
    [
        38,
        4,
        492
    ],
    [
        39,
        4,
        498
    ],
    [
        41,
        4,
        513
    ],
    [
        42,
        4,
        522
    ],
    [
        43,
        4,
        529
    ],
    [
        44,
        4,
        537
    ],
    [
        45,
        4,
        544
    ],
    [
        46,
        4,
        553
    ],
    [
        47,
        4,
        569
    ],
    [
        48,
        4,
        576
    ],
    [
        49,
        4,
        591
    ],
    [
        50,
        4,
        604
    ],
    [
        51,
        4,
        612
    ],
    [
        52,
        4,
        621
    ],
    [
        53,
        4,
        628
    ],
    [
        55,
        4,
        636
    ],
    [
        56,
        4,
        642
    ],
    [
        57,
        4,
        653
    ],
    [
        58,
        4,
        658
    ],
    [
        60,
        4,
        667
    ],
    [
        61,
        4,
        682
    ],
    [
        62,
        4,
        721
    ],
    [
        64,
        4,
        736
    ],
    [
        64,
        3,
        744
    ],
    [
        65,
        3,
        752
    ],
    [
        66,
        3,
        760
    ],
    [
        68,
        3,
        770
    ],
    [
        69,
        3,
        791
    ],
    [
        69,
        2,
        820
    ],
    [
        70,
        2,
        842
    ],
    [
        71,
        2,
        861
    ],
    [
        71,
        1,
        869
    ],
    [
        72,
        1,
        877
    ],
    [
        73,
        0,
        893
    ],
    [
        74,
        0,
        902
    ],
    [
        75,
        0,
        909
    ],
    [
        77,
        0,
        918
    ],
    [
        78,
        -1,
        926
    ],
    [
        79,
        -1,
        931
    ],
    [
        81,
        -2,
        939
    ],
    [
        83,
        -2,
        947
    ],
    [
        84,
        -2,
        957
    ],
    [
        85,
        -2,
        965
    ],
    [
        87,
        -2,
        972
    ],
    [
        88,
        -2,
        988
    ],
    [
        88,
        -3,
        1119
    ],
    [
        89,
        -3,
        1131
    ],
    [
        89,
        -4,
        1140
    ],
    [
        90,
        -4,
        1152
    ],
    [
        91,
        -4,
        1161
    ],
    [
        92,
        -4,
        1178
    ],
    [
        93,
        -4,
        1185
    ],
    [
        94,
        -4,
        1193
    ],
    [
        96,
        -5,
        1201
    ],
    [
        97,
        -5,
        1209
    ],
    [
        98,
        -5,
        1216
    ],
    [
        99,
        -5,
        1225
    ],
    [
        101,
        -5,
        1230
    ],
    [
        102,
        -5,
        1246
    ],
    [
        103,
        -5,
        1395
    ],
    [
        104,
        -5,
        1407
    ],
    [
        105,
        -5,
        1423
    ],
    [
        105,
        -6,
        1434
    ],
    [
        106,
        -6,
        1453
    ],
    [
        107,
        -6,
        1532
    ],
    [
        108,
        -6,
        1552
    ],
    [
        109,
        -6,
        1560
    ],
    [
        109,
        -7,
        1570
    ],
    [
        110,
        -7,
        1576
    ],
    [
        111,
        -8,
        1756
    ],
    [
        112,
        -8,
        1778
    ],
    [
        113,
        -8,
        1826
    ],
    [
        114,
        -9,
        1849
    ],
    [
        115,
        -9,
        1867
    ],
    [
        116,
        -9,
        1888
    ],
    [
        117,
        -9,
        2007
    ]
]
trail_3 = [
    [
        4,
        0,
        119
    ],
    [
        10,
        0,
        144
    ],
    [
        12,
        0,
        149
    ],
    [
        15,
        0,
        152
    ],
    [
        16,
        0,
        159
    ],
    [
        18,
        0,
        167
    ],
    [
        19,
        1,
        176
    ],
    [
        21,
        1,
        184
    ],
    [
        22,
        1,
        192
    ],
    [
        23,
        1,
        196
    ],
    [
        25,
        1,
        206
    ],
    [
        26,
        1,
        221
    ],
    [
        27,
        1,
        229
    ],
    [
        28,
        1,
        237
    ],
    [
        30,
        1,
        245
    ],
    [
        31,
        1,
        253
    ],
    [
        32,
        1,
        261
    ],
    [
        33,
        1,
        269
    ],
    [
        35,
        1,
        278
    ],
    [
        36,
        1,
        286
    ],
    [
        37,
        1,
        295
    ],
    [
        38,
        1,
        299
    ],
    [
        41,
        1,
        308
    ],
    [
        42,
        1,
        314
    ],
    [
        43,
        1,
        323
    ],
    [
        45,
        1,
        330
    ],
    [
        47,
        1,
        339
    ],
    [
        50,
        1,
        346
    ],
    [
        53,
        1,
        356
    ],
    [
        56,
        1,
        362
    ],
    [
        58,
        1,
        372
    ],
    [
        60,
        1,
        378
    ],
    [
        61,
        2,
        387
    ],
    [
        62,
        2,
        395
    ],
    [
        64,
        2,
        401
    ],
    [
        65,
        2,
        409
    ],
    [
        66,
        2,
        416
    ],
    [
        68,
        2,
        426
    ],
    [
        70,
        2,
        432
    ],
    [
        72,
        2,
        442
    ],
    [
        74,
        2,
        448
    ],
    [
        75,
        2,
        457
    ],
    [
        77,
        2,
        464
    ],
    [
        78,
        2,
        473
    ],
    [
        79,
        2,
        480
    ],
    [
        80,
        2,
        489
    ],
    [
        82,
        2,
        496
    ],
    [
        83,
        2,
        503
    ],
    [
        84,
        2,
        511
    ],
    [
        86,
        2,
        519
    ],
    [
        87,
        2,
        527
    ],
    [
        89,
        2,
        536
    ],
    [
        90,
        2,
        545
    ],
    [
        92,
        2,
        551
    ],
    [
        95,
        2,
        562
    ],
    [
        98,
        2,
        568
    ],
    [
        102,
        2,
        578
    ],
    [
        105,
        2,
        584
    ],
    [
        107,
        2,
        592
    ],
    [
        110,
        2,
        599
    ],
    [
        111,
        2,
        607
    ],
    [
        112,
        2,
        612
    ],
    [
        113,
        2,
        623
    ],
    [
        115,
        2,
        628
    ],
    [
        116,
        2,
        639
    ],
    [
        117,
        2,
        644
    ],
    [
        119,
        2,
        656
    ],
    [
        120,
        2,
        661
    ],
    [
        121,
        2,
        678
    ],
    [
        122,
        2,
        688
    ],
    [
        123,
        2,
        710
    ],
    [
        124,
        2,
        727
    ],
    [
        125,
        2,
        734
    ],
    [
        126,
        2,
        744
    ],
    [
        128,
        2,
        751
    ],
    [
        133,
        2,
        760
    ],
    [
        136,
        2,
        766
    ],
    [
        139,
        2,
        776
    ],
    [
        142,
        2,
        784
    ],
    [
        148,
        2,
        791
    ],
    [
        152,
        2,
        799
    ],
    [
        155,
        2,
        805
    ],
    [
        157,
        2,
        816
    ],
    [
        158,
        2,
        821
    ],
    [
        160,
        2,
        830
    ],
    [
        161,
        2,
        837
    ],
    [
        162,
        2,
        845
    ],
    [
        163,
        2,
        853
    ],
    [
        164,
        2,
        861
    ],
    [
        165,
        2,
        868
    ],
    [
        166,
        2,
        885
    ],
    [
        168,
        2,
        901
    ],
    [
        169,
        2,
        915
    ],
    [
        170,
        2,
        947
    ],
    [
        171,
        2,
        973
    ],
    [
        172,
        2,
        979
    ],
    [
        173,
        2,
        994
    ],
    [
        174,
        2,
        1001
    ],
    [
        175,
        2,
        1011
    ],
    [
        176,
        2,
        1018
    ],
    [
        178,
        2,
        1026
    ],
    [
        179,
        2,
        1033
    ],
    [
        180,
        2,
        1042
    ],
    [
        181,
        2,
        1048
    ],
    [
        182,
        2,
        1057
    ],
    [
        182,
        2,
        1142
    ],
    [
        183,
        2,
        1199
    ],
    [
        184,
        2,
        1237
    ],
    [
        185,
        2,
        1253
    ],
    [
        185,
        3,
        1375
    ],
    [
        186,
        3,
        1386
    ],
    [
        187,
        3,
        1395
    ],
    [
        188,
        3,
        1531
    ],
    [
        189,
        3,
        1563
    ],
    [
        190,
        3,
        1603
    ],
    [
        191,
        3,
        1638
    ],
    [
        192,
        3,
        1681
    ],
    [
        193,
        3,
        1707
    ],
    [
        195,
        3,
        1723
    ],
    [
        198,
        3,
        1735
    ],
    [
        199,
        3,
        1740
    ],
    [
        200,
        3,
        1750
    ],
    [
        201,
        3,
        1762
    ],
    [
        202,
        4,
        1767
    ],
    [
        203,
        4,
        1777
    ],
    [
        204,
        4,
        1803
    ],
    [
        204,
        5,
        2549
    ],
    [
        203,
        5,
        2555
    ]
]
trail_4 = [
    [
        5,
        -1,
        142
    ],
    [
        11,
        -1,
        154
    ],
    [
        16,
        -1,
        158
    ],
    [
        21,
        -1,
        166
    ],
    [
        27,
        -1,
        174
    ],
    [
        32,
        -1,
        182
    ],
    [
        38,
        -1,
        190
    ],
    [
        43,
        -1,
        198
    ],
    [
        49,
        -2,
        206
    ],
    [
        53,
        -2,
        213
    ],
    [
        57,
        -3,
        222
    ],
    [
        60,
        -3,
        228
    ],
    [
        62,
        -3,
        236
    ],
    [
        65,
        -3,
        244
    ],
    [
        66,
        -3,
        252
    ],
    [
        67,
        -3,
        260
    ],
    [
        68,
        -3,
        268
    ],
    [
        70,
        -3,
        276
    ],
    [
        71,
        -3,
        283
    ],
    [
        72,
        -3,
        293
    ],
    [
        73,
        -3,
        300
    ],
    [
        74,
        -3,
        310
    ],
    [
        75,
        -3,
        315
    ],
    [
        76,
        -3,
        325
    ],
    [
        77,
        -3,
        332
    ],
    [
        78,
        -3,
        338
    ],
    [
        80,
        -3,
        347
    ],
    [
        81,
        -3,
        354
    ],
    [
        82,
        -3,
        362
    ],
    [
        84,
        -3,
        370
    ],
    [
        85,
        -3,
        378
    ],
    [
        86,
        -3,
        387
    ],
    [
        88,
        -3,
        394
    ],
    [
        89,
        -3,
        402
    ],
    [
        92,
        -3,
        411
    ],
    [
        94,
        -3,
        419
    ],
    [
        97,
        -3,
        428
    ],
    [
        98,
        -3,
        432
    ],
    [
        100,
        -3,
        440
    ],
    [
        102,
        -3,
        448
    ],
    [
        105,
        -3,
        456
    ],
    [
        107,
        -3,
        464
    ],
    [
        108,
        -3,
        473
    ],
    [
        110,
        -3,
        480
    ],
    [
        111,
        -3,
        489
    ],
    [
        113,
        -3,
        496
    ],
    [
        114,
        -3,
        505
    ],
    [
        115,
        -3,
        518
    ],
    [
        117,
        -3,
        522
    ],
    [
        118,
        -3,
        528
    ],
    [
        120,
        -3,
        548
    ],
    [
        122,
        -3,
        552
    ],
    [
        123,
        -3,
        559
    ],
    [
        124,
        -3,
        567
    ],
    [
        126,
        -3,
        575
    ],
    [
        127,
        -3,
        583
    ],
    [
        128,
        -3,
        590
    ],
    [
        129,
        -3,
        598
    ],
    [
        131,
        -2,
        606
    ],
    [
        132,
        -2,
        615
    ],
    [
        133,
        -2,
        622
    ],
    [
        135,
        -2,
        630
    ],
    [
        136,
        -2,
        638
    ],
    [
        137,
        -2,
        646
    ],
    [
        138,
        -2,
        652
    ],
    [
        140,
        -2,
        661
    ],
    [
        141,
        -2,
        677
    ],
    [
        143,
        -2,
        684
    ],
    [
        144,
        -2,
        693
    ],
    [
        145,
        -2,
        700
    ],
    [
        147,
        -2,
        709
    ],
    [
        148,
        -2,
        716
    ],
    [
        149,
        -2,
        725
    ],
    [
        150,
        -2,
        731
    ],
    [
        152,
        -2,
        741
    ],
    [
        153,
        -2,
        746
    ],
    [
        154,
        -2,
        754
    ],
    [
        156,
        -2,
        763
    ],
    [
        157,
        -2,
        770
    ],
    [
        158,
        -2,
        779
    ],
    [
        159,
        -2,
        786
    ],
    [
        161,
        -2,
        795
    ],
    [
        162,
        -2,
        803
    ],
    [
        163,
        -2,
        810
    ],
    [
        165,
        -2,
        818
    ],
    [
        166,
        -2,
        827
    ],
    [
        167,
        -2,
        835
    ],
    [
        168,
        -2,
        843
    ],
    [
        169,
        -2,
        848
    ],
    [
        170,
        -2,
        856
    ],
    [
        171,
        -2,
        863
    ],
    [
        173,
        -2,
        872
    ],
    [
        174,
        -2,
        880
    ],
    [
        175,
        -2,
        888
    ],
    [
        177,
        -2,
        896
    ],
    [
        178,
        -2,
        912
    ],
    [
        180,
        -2,
        920
    ],
    [
        181,
        -2,
        929
    ],
    [
        181,
        -2,
        944
    ],
    [
        183,
        -2,
        947
    ],
    [
        184,
        -2,
        959
    ],
    [
        186,
        -2,
        973
    ],
    [
        187,
        -2,
        981
    ],
    [
        188,
        -2,
        990
    ],
    [
        189,
        -2,
        998
    ],
    [
        191,
        -2,
        1006
    ],
    [
        192,
        -2,
        1022
    ],
    [
        193,
        -2,
        1030
    ],
    [
        194,
        -2,
        1039
    ],
    [
        196,
        -2,
        1046
    ],
    [
        197,
        -2,
        1053
    ],
    [
        198,
        -2,
        1060
    ],
    [
        199,
        -2,
        1068
    ],
    [
        201,
        -2,
        1076
    ],
    [
        202,
        -2,
        1084
    ],
    [
        203,
        -2,
        1093
    ],
    [
        204,
        -2,
        1099
    ],
    [
        205,
        -2,
        1116
    ],
    [
        203,
        -2,
        1723
    ],
    [
        202,
        -2,
        1732
    ],
    [
        201,
        -2,
        1740
    ],
    [
        201,
        -1,
        1952
    ]
]
trail_5 = [
    [
        4,
        -1,
        132
    ],
    [
        6,
        -1,
        143
    ],
    [
        8,
        -2,
        147
    ],
    [
        11,
        -2,
        156
    ],
    [
        15,
        -2,
        164
    ],
    [
        20,
        -3,
        174
    ],
    [
        26,
        -3,
        180
    ],
    [
        32,
        -3,
        189
    ],
    [
        37,
        -4,
        197
    ],
    [
        41,
        -5,
        206
    ],
    [
        46,
        -5,
        211
    ],
    [
        49,
        -6,
        219
    ],
    [
        53,
        -6,
        226
    ],
    [
        56,
        -7,
        235
    ],
    [
        59,
        -7,
        245
    ],
    [
        63,
        -8,
        259
    ],
    [
        64,
        -8,
        266
    ],
    [
        67,
        -8,
        275
    ],
    [
        69,
        -8,
        282
    ],
    [
        71,
        -8,
        291
    ],
    [
        73,
        -9,
        299
    ],
    [
        75,
        -9,
        304
    ],
    [
        77,
        -10,
        311
    ],
    [
        80,
        -10,
        322
    ],
    [
        84,
        -10,
        328
    ],
    [
        87,
        -10,
        336
    ],
    [
        91,
        -10,
        343
    ],
    [
        95,
        -11,
        353
    ],
    [
        98,
        -11,
        359
    ],
    [
        101,
        -12,
        369
    ],
    [
        103,
        -12,
        376
    ],
    [
        104,
        -12,
        385
    ],
    [
        106,
        -12,
        392
    ],
    [
        107,
        -12,
        398
    ],
    [
        108,
        -12,
        406
    ],
    [
        109,
        -12,
        414
    ],
    [
        111,
        -12,
        423
    ],
    [
        112,
        -12,
        429
    ],
    [
        113,
        -12,
        438
    ],
    [
        115,
        -12,
        446
    ],
    [
        116,
        -12,
        455
    ],
    [
        117,
        -12,
        461
    ],
    [
        119,
        -13,
        470
    ],
    [
        121,
        -13,
        478
    ],
    [
        122,
        -13,
        486
    ],
    [
        123,
        -13,
        493
    ],
    [
        124,
        -13,
        502
    ],
    [
        126,
        -13,
        508
    ],
    [
        127,
        -13,
        516
    ],
    [
        128,
        -13,
        525
    ],
    [
        130,
        -13,
        533
    ],
    [
        131,
        -13,
        541
    ],
    [
        132,
        -13,
        548
    ],
    [
        134,
        -13,
        557
    ],
    [
        135,
        -14,
        564
    ],
    [
        137,
        -14,
        573
    ],
    [
        139,
        -14,
        579
    ],
    [
        142,
        -14,
        588
    ],
    [
        145,
        -14,
        596
    ],
    [
        148,
        -14,
        605
    ],
    [
        151,
        -14,
        610
    ],
    [
        154,
        -14,
        619
    ],
    [
        156,
        -14,
        628
    ],
    [
        158,
        -14,
        635
    ],
    [
        160,
        -14,
        642
    ],
    [
        161,
        -14,
        651
    ],
    [
        162,
        -14,
        659
    ],
    [
        163,
        -14,
        666
    ],
    [
        163,
        -15,
        675
    ],
    [
        164,
        -15,
        682
    ],
    [
        165,
        -15,
        691
    ],
    [
        166,
        -15,
        698
    ],
    [
        167,
        -15,
        707
    ],
    [
        168,
        -15,
        712
    ],
    [
        170,
        -15,
        721
    ],
    [
        172,
        -15,
        727
    ],
    [
        174,
        -15,
        737
    ],
    [
        176,
        -15,
        743
    ],
    [
        177,
        -15,
        753
    ],
    [
        180,
        -15,
        760
    ],
    [
        184,
        -15,
        768
    ],
    [
        186,
        -15,
        776
    ],
    [
        187,
        -15,
        785
    ],
    [
        188,
        -15,
        792
    ],
    [
        189,
        -15,
        802
    ],
    [
        192,
        -14,
        808
    ],
    [
        193,
        -14,
        815
    ],
    [
        194,
        -14,
        823
    ],
    [
        196,
        -13,
        829
    ],
    [
        198,
        -13,
        839
    ],
    [
        199,
        -13,
        846
    ],
    [
        200,
        -13,
        854
    ],
    [
        202,
        -13,
        862
    ],
    [
        203,
        -13,
        870
    ],
    [
        204,
        -13,
        877
    ],
    [
        205,
        -13,
        886
    ],
    [
        206,
        -13,
        893
    ],
    [
        207,
        -13,
        902
    ],
    [
        209,
        -13,
        909
    ],
    [
        210,
        -13,
        917
    ],
    [
        211,
        -13,
        932
    ],
    [
        212,
        -13,
        944
    ],
    [
        213,
        -13,
        960
    ],
    [
        214,
        -13,
        992
    ],
    [
        215,
        -13,
        1066
    ],
    [
        216,
        -13,
        1090
    ],
    [
        217,
        -12,
        1106
    ],
    [
        218,
        -12,
        1127
    ],
    [
        219,
        -12,
        1152
    ],
    [
        220,
        -12,
        1215
    ],
    [
        221,
        -12,
        1225
    ],
    [
        222,
        -12,
        1261
    ],
    [
        223,
        -12,
        1306
    ],
    [
        224,
        -12,
        1490
    ],
    [
        225,
        -12,
        1497
    ],
    [
        226,
        -12,
        1530
    ],
    [
        227,
        -12,
        2040
    ],
    [
        228,
        -12,
        2228
    ]
]
trail_6 = [[6, 3, 405], [12, 1, 439], [17, 2, 451], [22, 4, 479], [26, 2, 508], [31, 3, 525], [35, 1, 547],
           [38, 3, 560], [42, 4, 584], [45, 3, 602], [48, 3, 617], [51, 4, 643], [54, 4, 658], [56, 3, 668],
           [58, 3, 687], [60, 2, 710], [62, 2, 738], [64, 2, 753], [65, 4, 774], [67, 4, 802], [68, 2, 813],
           [69, 1, 834], [70, 4, 858], [71, 3, 876], [72, 4, 904], [73, 1, 926], [74, 2, 956], [75, 2, 975],
           [76, 1, 1016], [77, 4, 1049], [78, 1, 1131], [79, 2, 1215]]
trail_7 = [[5, 4, 488], [7, 1, 503], [14, 1, 526], [21, 3, 542], [28, 2, 552], [34, 4, 568], [40, 2, 590], [45, 1, 607],
           [51, 4, 620], [56, 2, 634], [61, 2, 656], [66, 1, 675], [70, 1, 700], [74, 1, 721], [78, 1, 739],
           [82, 2, 761], [86, 4, 789], [90, 1, 814], [93, 1, 837], [96, 1, 858], [99, 4, 879], [102, 4, 890],
           [105, 3, 901], [108, 4, 915], [110, 3, 928], [112, 2, 957], [115, 3, 969], [117, 1, 998], [119, 1, 1010],
           [120, 2, 1032], [122, 1, 1044], [124, 2, 1061], [125, 3, 1078], [127, 3, 1100], [128, 3, 1123],
           [130, 1, 1153], [131, 1, 1174], [132, 3, 1202], [133, 4, 1213], [134, 3, 1241], [135, 4, 1251],
           [136, 2, 1268], [137, 3, 1285], [138, 3, 1331], [139, 2, 1350], [140, 1, 1381], [141, 2, 1422],
           [142, 2, 1452], [143, 1, 1512], [144, 4, 1632], [145, 3, 1759]]
trail_8 = [[2, 4, 316], [6, 3, 341], [11, 3, 353], [16, 3, 367], [21, 4, 379], [26, 3, 406], [31, 4, 417], [35, 3, 447],
           [40, 1, 465], [44, 3, 489], [48, 3, 504], [52, 2, 534], [56, 2, 544], [59, 3, 564], [63, 1, 582],
           [66, 2, 600], [69, 3, 629], [72, 3, 643], [75, 1, 668], [78, 3, 697], [80, 1, 710], [83, 3, 734],
           [85, 3, 761], [88, 1, 791], [90, 4, 801], [92, 2, 812], [94, 2, 833], [96, 1, 846], [98, 3, 859],
           [99, 4, 877], [101, 4, 905], [102, 1, 925], [104, 3, 955], [105, 1, 984], [107, 3, 1011], [108, 3, 1021],
           [109, 1, 1042], [110, 3, 1054], [111, 2, 1067], [112, 3, 1081], [113, 4, 1096], [114, 1, 1115],
           [115, 2, 1133], [116, 2, 1174], [117, 3, 1203], [118, 1, 1234], [119, 3, 1267], [120, 2, 1295],
           [121, 2, 1347], [122, 2, 1434], [123, 4, 1567]]
trail_9 = [[2, 4, 425], [6, 3, 439], [11, 4, 451], [16, 2, 465], [21, 4, 487], [26, 3, 506], [30, 4, 529], [35, 4, 559],
           [39, 3, 571], [43, 4, 601], [47, 3, 626], [51, 4, 637], [54, 1, 656], [58, 4, 674], [61, 3, 690],
           [64, 1, 719], [67, 1, 730], [70, 4, 743], [73, 2, 759], [76, 4, 787], [78, 3, 797], [80, 1, 816],
           [83, 2, 828], [85, 2, 857], [87, 2, 882], [89, 1, 896], [91, 4, 919], [93, 4, 937], [94, 3, 952],
           [96, 4, 973], [97, 1, 984], [99, 2, 1009], [100, 1, 1028], [101, 4, 1040], [102, 3, 1051], [103, 2, 1064],
           [105, 1, 1083], [106, 4, 1131], [107, 3, 1142], [108, 4, 1158], [109, 3, 1172], [110, 1, 1220],
           [111, 1, 1234], [112, 4, 1270], [113, 1, 1307], [114, 3, 1378], [115, 2, 1444], [116, 1, 1562]]
trail_10 = [[6, 4, 360], [7, 3, 378], [13, 4, 391], [20, 2, 417], [26, 2, 445], [32, 1, 470], [38, 4, 499], [44, 4, 514], [50, 3, 538], [55, 4, 560], [61, 4, 570], [66, 4, 597], [71, 2, 627], [77, 2, 653], [82, 2, 672], [87, 2, 698], [92, 2, 725], [96, 3, 735], [101, 4, 746], [106, 1, 774], [110, 2, 798], [114, 3, 812], [119, 2, 831], [123, 4, 860], [127, 3, 883], [131, 1, 900], [135, 2, 917], [138, 4, 933], [142, 1, 956], [146, 1, 984], [149, 1, 1000], [153, 3, 1020], [156, 3, 1030], [159, 4, 1053], [162, 1, 1067], [165, 3, 1095], [169, 4, 1111], [171, 1, 1140], [174, 4, 1154], [177, 3, 1172], [180, 3, 1200], [182, 4, 1217], [185, 1, 1228], [188, 4, 1255], [190, 4, 1284], [192, 1, 1294], [195, 1, 1319], [197, 1, 1346], [199, 3, 1359], [201, 1, 1381], [203, 2, 1396], [205, 4, 1423], [207, 4, 1434], [209, 2, 1446], [211, 3, 1460], [213, 2, 1472], [214, 3, 1490], [216, 2, 1501], [218, 1, 1513], [219, 3, 1530], [221, 1, 1540], [222, 4, 1560], [224, 1, 1575], [225, 4, 1596], [226, 3, 1625], [228, 3, 1639], [229, 2, 1651], [230, 4, 1678], [231, 3, 1700], [232, 4, 1716], [233, 3, 1735], [234, 4, 1754], [235, 2, 1767], [236, 4, 1783], [237, 2, 1795], [238, 1, 1821], [239, 3, 1851], [240, 3, 1861], [241, 1, 1880], [242, 2, 1926], [243, 1, 1948], [244, 2, 1977], [245, 1, 2028], [246, 4, 2065], [247, 2, 2110], [248, 4, 2144], [249, 2, 2182], [250, 4, 2237], [251, 2, 2300], [252, 3, 2363], [253, 2, 2462], [254, 1, 2562], [255, 4, 2813]]
trail_11 = [[7, 3, 403], [12, 2, 435], [16, 3, 447], [18, 1, 477], [22, 1, 504], [26, 1, 517], [32, 3, 545], [35, 2, 555], [41, 3, 579], [42, 1, 609], [49, 4, 634], [51, 3, 658], [52, 1, 670], [57, 2, 684], [60, 3, 699], [62, 2, 714], [64, 1, 724], [73, 4, 748], [73, 4, 764], [75, 3, 789], [78, 3, 803], [79, 1, 813], [82, 1, 831], [84, 1, 853], [87, 2, 879], [92, 1, 894], [92, 2, 921], [96, 4, 932], [97, 3, 951], [99, 1, 971], [101, 1, 990], [102, 1, 1003], [107, 1, 1021], [108, 4, 1031], [108, 1, 1043], [110, 2, 1072], [112, 1, 1092], [115, 4, 1109], [118, 4, 1138], [116, 2, 1162], [117, 1, 1187], [121, 4, 1211], [123, 4, 1222], [126, 4, 1246], [123, 2, 1275], [126, 3, 1301], [130, 4, 1319], [127, 1, 1330], [130, 3, 1340], [128, 1, 1354], [130, 2, 1373], [132, 3, 1397], [137, 4, 1411], [135, 4, 1430], [135, 3, 1478], [136, 2, 1499], [137, 3, 1511], [136, 1, 1549], [141, 4, 1590], [141, 3, 1604], [143, 4, 1647], [140, 1, 1713], [141, 1, 1787], [142, 1, 1860], [142, 2, 1947]]
# 2
def show_plt():
    for i in range(1, 5):
        trail_list = eval(f"trail_{i}")
        print(f"trail_{i}")
        x_trail = []
        y_trail = []
        t_trail = []
        for trail in trail_list:
            x = trail[0]
            y = trail[1]
            t = trail[2]
            x_trail.append(x)
            y_trail.append(y)
            t_trail.append(t)
        print(np.diff(x_trail))
        plt.plot(t_trail, x_trail)
    plt.show()


def easeOutQuint(x):
    return (1 - math.pow(1 - x, 5))


# 3
def get_trail(move_distence, show=False):
    def __set_pt_time(_dist):
        if _dist < 100:
            __need_time = int(random.uniform(500, 1500))
        else:
            __need_time = int(random.uniform(1000, 2000))
        __end_pt_time = []
        __move_pt_time = []
        __pos_z = []

        total_move_time = __need_time * random.uniform(0.8, 0.9)
        start_point_time = random.uniform(110, 200)
        __start_pt_time = [int(start_point_time)]

        sum_move_time = 0

        _tmp_total_move_time = total_move_time
        while True:
            delta_time = random.uniform(15, 20)
            if _tmp_total_move_time < delta_time:
                break

            sum_move_time += delta_time
            _tmp_total_move_time -= delta_time
            __move_pt_time.append(int(start_point_time + sum_move_time))

        last_pt_time = __move_pt_time[-1]
        __move_pt_time.append(int(last_pt_time + _tmp_total_move_time))

        sum_end_time = start_point_time + total_move_time
        other_point_time = __need_time - sum_end_time
        end_first_ptime = other_point_time / 2

        while True:
            delta_time = random.uniform(110, 200)
            if end_first_ptime - delta_time <= 0:
                break

            end_first_ptime -= delta_time
            sum_end_time += delta_time
            __end_pt_time.append(int(sum_end_time))

        __end_pt_time.append(int(sum_end_time + (other_point_time / 2 + end_first_ptime)))
        __pos_z.extend(__start_pt_time)
        __pos_z.extend(__move_pt_time)
        __pos_z.extend(__end_pt_time)
        return __pos_z

    def __get_pos_y(point_count):
        _pos_y = []
        start_y = random.randint(-1, 1)
        end_y = random.randint(-13, -5)
        x = np.linspace(start_y, end_y, point_count)
        for _, val in enumerate(x):
            _pos_y.append(int(val))

        return _pos_y

    time_list = __set_pt_time(move_distence)
    trail_length = len(time_list)
    t = np.linspace(-0.5, 1, trail_length)  # t
    mult = move_distence / 7.59375
    x = [int(mult * (easeOutQuint(i) + 6.59375)) for i in t]
    y = __get_pos_y(trail_length)
    # t=-0.5 x=-6.59375
    # t=1 x=7.59375
    delta_pt = abs(np.random.normal(scale=3, size=trail_length))
    for index in range(len(delta_pt)):
        change_x = int(x[index] + delta_pt[index])
        if index + 1 < trail_length and x[index + 1] > change_x:
            x[index] = change_x

    if show:
        delta_t = [i for i in range(trail_length)]
        plt.plot(delta_t, delta_pt, color='green')
        # plt.plot(time_list, x, color='red')
        plt.show()
    result = []
    print(x[-1] - x[0])
    for idx in range(trail_length):
        result.append([x[idx], y[idx], time_list[idx]])
    return result


def showeaseOutQuint(distance):
    def func(x):
        return 1 - pow(1 - x, 5) + 6.59375

    print(func(-0.5), func(1))
    x = np.linspace(-0.5, 1, 70)
    y = [distance / 7.59375 * func(i) for i in x]
    delta_pt = abs(np.random.normal(scale=1.1, size=70))
    for index in range(len(delta_pt)):
        change_y = int(x[index] + delta_pt[index])
        if index + 1 < 70 and y[index + 1] > change_y:
            y[index] += change_y
    t = np.linspace(100, 1200, 70)
    plt.plot(t, y)
    plt.show()


if __name__ == '__main__':
    show_plt()
    # distance = 100
    # # showeaseOutQuint(distance)
    # result = get_trail(random.randint(100, 200), False)
    # print(result)
    # """
    # 1. 收集轨迹
    # 2. 画出轨迹图像 找缓动函数相同形状
    # 3. 绘制缓动函数 找到符合形状的作用域
    # 4. 找到作用域内最大值 最小值 上下移动 *距离系数
    # 5. 替换时间（t）轴为自己的
    # 6. 高斯函数增加波动
    # 7. 细节修改 x轴 t轴 np.diff对比
    # """
