// Defining global variables
let family = 0;
let fortune = 0;
let knowledge = 0;
let pleasure = 0;
let popularity = 0;
let romance = 0;
let all_aspir = {};

$('#parent1').change(function() {
    if (document.getElementById('parent1').value == "Yes") {
        document.getElementById('family-aspir1').style.display = 'block';
    }
    else {
        document.getElementById('family-aspir1').style.display = 'none';
    }
});

$('#parent2').change(function() {
    if (document.getElementById('parent2').value == "Yes") {
        document.getElementById('family-aspir2').style.display = 'block';
    }
    else {
        document.getElementById('family-aspir2').style.display = 'none';
    }
});

function parents(prim_P1, sec_P1, prim_P2, sec_P2) {
    if (prim_P1 !== "") {
        if (prim_P1 !== "Grilled Cheese") {
            if (prim_P1 === "Family") {
                family += 2;
            }
            else if (prim_P1 === "Fortune") {
                fortune += 2;
            }
            else if (prim_P1 === "Knowledge") {
                knowledge += 2;
            }
            else if (prim_P1 === "Pleasure") {
                pleasure += 2;
            }
            else if (prim_P1 === "Popularity") {
                popularity += 2;
            }
            else{
                romance += 2;
            }
            if (sec_P1 != ("" || "Grilled Cheese")) {
                if (sec_P1 === "Family") {
                    family += 1;
                }
                else if (sec_P1 === "Fortune") {
                    fortune += 1;
                }
                else if (sec_P1 === "Knowledge") {
                    knowledge += 1;
                }
                else if (sec_P1 === "Pleasure") {
                    pleasure += 1;
                }
                else if (sec_P1 === "Popularity") {
                    popularity += 1;
                }
                else {
                    romance += 1;
                }
            }
            }
        }
    if (prim_P2 !== "") {
        if (prim_P2 !== "Grilled Cheese") {
            if (prim_P2 === "Family") {
                family += 2;
            }
            else if (prim_P2 === "Fortune") {
                fortune += 2;
            }
            else if (prim_P2 === "Knowledge") {
                knowledge += 2;
            }
            else if (prim_P2 === "Pleasure") {
                pleasure += 2;
            }
            else if (prim_P2 === "Popularity") {
                popularity += 2;
            }
            else{
                romance += 2;
            }
        if (sec_P2 != ("" || "Grilled Cheese")) {
            if (sec_P2 === "Family") {
                family += 1;
            }
            else if (sec_P2 === "Fortune") {
                fortune += 1;
            }
            else if (sec_P2 === "Knowledge") {
                knowledge += 1;
            }
            else if (sec_P2 === "Pleasure") {
                pleasure += 1;
            }
            else if (sec_P2 === "Popularity") {
                popularity += 1;
            }
            else {
                romance += 1;
            }
        }
    }
}
}

function personality(ns, os, al, ps, ng) {
    let calc_ns = 0;
    let calc_os = 0;
    let calc_al = 0;
    let calc_ps = 0;
    let calc_ng = 0;
    if (ns > 5) {
        calc_ns = ns - 5;
        family += calc_ns;
        knowledge += Math.ceil(calc_ns / 2);
    }
    else if (ns < 5) {
        if (ns == 4) {
            calc_ns = 1;
        }
        else if (ns == 3) {
            calc_ns = 2;
        }
        else if (ns == 2) {
            calc_ns = 3;
        }
        else if (ns == 1) {
            calc_ns = 4;
        }
        else {
            calc_ns = 5;
        }
        pleasure += calc_ns;
        romance += Math.ceil(calc_ns / 2);
    }
    if (os > 5) {
        calc_os = os - 5;
        popularity += calc_os;
        fortune += Math.ceil(calc_os / 2);
    }
    else if (os < 5) {
        if (os == 4) {
            calc_os = 1;
        }
        else if (os == 3) {
            calc_os = 2;
        }
        else if (os == 2) {
            calc_os = 3;
        }
        else if (os == 1) {
            calc_os = 4;
        }
        else {
            calc_os = 5;
        }
        knowledge += calc_os;
        pleasure += Math.ceil(calc_os / 2);
    }
    if (al > 5) {
        calc_al = al - 5;
        family += calc_al;
        popularity += Math.ceil(calc_al / 2);
    }
    else if (al < 5) {
        if (al == 4) {
            calc_al = 1;
        }
        else if (al == 3) {
            calc_al = 2;
        }
        else if (al == 2) {
            calc_al = 3;
        }
        else if (al == 1) {
            calc_al = 4;
        }
        else {
            calc_al = 5;
        }
        pleasure += calc_al;
        knowledge += Math.ceil(calc_al / 2);
    }
    if (ps > 5) {
        calc_ps = ps - 5;
        romance += calc_ps;
        family += Math.ceil(calc_ps / 2);
    }
    else if (ps < 5) {
        if (ps == 4) {
            calc_ps = 1;
        }
        else if (ps == 3) {
            calc_ps = 2;
        }
        else if (ps == 2) {
            calc_ps = 3;
        }
        else if (ps == 1) {
            calc_ps = 4;
        }
        else {
            calc_ps = 5;
        }
        fortune += calc_ps;
        popularity += Math.ceil(calc_ps / 2);
    }
    if (ng > 5) {
        calc_ng = ng - 5;
        popularity += calc_ng;
        romance += Math.ceil(calc_ng / 2);
    }
    else if (ng < 5) {
        if (ng == 4) {
            calc_ng = 1;
        }
        else if (ng == 3) {
            calc_ng = 2;
        }
        else if (ng == 2) {
            calc_ng = 3;
        }
        else if (ng == 1) {
            calc_ng = 4;
        }
        else {
            calc_ng = 5;
        }
        knowledge += calc_ng;
        fortune += Math.ceil(calc_ng / 2);
    }
}

function interest(high, sec_high, low) {
    // Highest
    if (high === "inter_fam") {
        family += 3;
    }
    else if (high === "inter_for") {
        fortune += 3;
    }
    else if (high === "inter_know") {
        knowledge += 3;
    }
    else if (high === "inter_plea") {
        pleasure += 3;
    }
    else if (high === "inter-pop") {
        popularity += 3;
    }
    else {
        romance += 3;
    }
    // Second-highest
    if (sec_high === "inter_fam") {
        family += 2;
    }
    else if (sec_high === "inter_for") {
        fortune += 2;
    }
    else if (sec_high === "inter_know") {
        knowledge += 2;
    }
    else if (sec_high === "inter_plea") {
        pleasure += 2;
    }
    else if (sec_high === "inter-pop") {
        popularity += 2;
    }
    else {
        romance += 2;
    }
    // Lowest
    if (low === "inter_fam") {
        family -= 2;
    }
    else if (low === "inter_for") {
        fortune -= 2;
    }
    else if (low === "inter_know") {
        knowledge -= 2;
    }
    else if (low === "inter_plea") {
        pleasure -= 2;
    }
    else if (low === "inter-pop") {
        popularity -= 2;
    }
    else {
        romance -= 2;
    }
}

function zodiac(zod) {
    if (zod === "zod-fam") {
        family += 2;
    }
    else if (zod === "zod-for") {
        fortune += 2;
    }
    else if (zod === "zod-know") {
        knowledge += 2;
    }
    else if (zod === "zod-plea") {
        pleasure += 2;
    }
    else if (zod === "zod-pop") {
        popularity += 2;
    }
    else {
        romance += 2;
    }
}

function jealousy(primary, secondary) {
    let jealousy = Math.floor(Math.random() * 20);

    if ((primary == ("Romance" || "Family")) || (secondary == ("Romance" || "Family"))) {
        if (primary == "Romance") {
            if (secondary == "Family") {
                if (jealousy > 10) {
                    jeal_lvl = "No Jealousy / Polyamorous";
                } else if (jealousy > 5) {
                    jeal_lvl = "Married Only";
                } else if (jealousy > 1) {
                    jeal_lvl = "Engaged / Steady";
                } else {
                    jeal_lvl = "In Love";
                }
            } else {
                if (jealousy > 7) {
                    jeal_lvl = "No Jealousy / Polyamorous";
                } else if (jealousy > 2) {
                    jeal_lvl = "Married Only";
                } else if (jealousy > 0) {
                    jeal_lvl = "Engaged / Steady";
                } else {
                    jeal_lvl = "In Love";
                }
            }
        } else if (primary == "Family") {
            if (secondary == "Romance") {
                if (jealousy > 17) {
                    jeal_lvl = "No Jealousy / Polyamorous";
                } else if (jealousy > 13) {
                    jeal_lvl = "Married Only";
                } else if (jealousy > 4) {
                    jeal_lvl = "Engaged / Steady";
                } else {
                    jeal_lvl = "In Love";
                }
            } else {
                if (jealousy > 18) {
                    jeal_lvl = "No Jealousy / Polyamorous";
                } else if (jealousy > 16) {
                    jeal_lvl = "Married Only";
                } else if (jealousy > 5) {
                    jeal_lvl = "Engaged / Steady";
                } else {
                    jeal_lvl = "In Love";
                }
            }
        } else if (secondary == "Romance") {
            if (jealousy > 14) {
                jeal_lvl = "No Jealousy / Polyamorous";
            } else if (jealousy > 8) {
                jeal_lvl = "Married Only";
            } else if (jealousy > 2) {
                jeal_lvl = "Engaged / Steady";
            } else {
                jeal_lvl = "In Love";
            }
        } else {
            if (jealousy > 17) {
                jeal_lvl = "No Jealousy / Polyamorous";
            } else if (jealousy > 14) {
                jeal_lvl = "Married Only";
            } else if (jealousy > 4) {
                jeal_lvl = "Engaged / Steady";
            } else {
                jeal_lvl = "In Love";
            }
        }
    } else {
        if (jealousy > 17) {
            jeal_lvl = "No Jealousy / Polyamorous";
        } else if (jealousy > 11) {
            jeal_lvl = "Married Only";
        } else if (jealousy > 3) {
            jeal_lvl = "Engaged / Steady";
        } else {
            jeal_lvl = "In Love";
        }
    }
    return jeal_lvl;
}

function calculator() {
    // Reset the personality variables
    family = 0;
    fortune = 0;
    knowledge = 0;
    pleasure = 0;
    popularity = 0;
    romance = 0;

    // Family variables
    if (document.getElementById("parent1").value == "No") {
        prim_P1 = "";
        sec_P1 = "";
    } else {
        prim_P1 = document.getElementById("primary1").value;
        sec_P1 = document.getElementById("secondary1").value;
    }

    if (document.getElementById("parent2").value == "No") {
        prim_P2 = "";
        sec_P2 = "";
    } else {
        prim_P2 = document.getElementById("primary2").value;
        sec_P2 = document.getElementById("secondary2").value;
    }

    // Personality variables
    const slop_neat = document.getElementById("sloppy-neat").value;
    const shy_out = document.getElementById("shy-outgoing").value;
    const lazy_acti = document.getElementById("lazy-active").value;
    const seri_play = document.getElementById("serious-playful").value;
    const grou_nice = document.getElementById("grouchy-nice").value;
    // Interest variables
    const int_high = document.getElementById("high_inter");
    const int_sec_high = document.getElementById("sec_high_inter");
    const int_low = document.getElementById("low_inter");
    // Zodiac variable
    const zod_dropd = document.getElementById("zodiac");

    // Functions for calculations
    parents(prim_P1, sec_P1, prim_P2, sec_P2);
    personality(slop_neat, shy_out, lazy_acti, seri_play, grou_nice);
    interest(int_high.options[int_high.selectedIndex].id, int_sec_high.options[int_sec_high.selectedIndex].id, int_low.options[int_low.selectedIndex].id);
    zodiac(zod_dropd.options[zod_dropd.selectedIndex].id);

    // Results
    all_aspir = {
        "Family" : family,
        "Fortune" : fortune,
        "Knowledge" : knowledge,
        "Pleasure" : pleasure,
        "Popularity" : popularity,
        "Romance" : romance
    };

    // Sorting results
    let aspir_entries = Object.entries(all_aspir);
    let sorted_aspir = aspir_entries.sort((a,b) => b[1] - a[1]);

    // Making those results visible to the average user
    let prim_aspir = Object.values(sorted_aspir)[0];
    let sec_aspir = Object.values(sorted_aspir)[1];
    let aspir_list = "";
    for (let i = 0; i < Object.values(sorted_aspir).length; i++) {
        aspir_list += Object.values(sorted_aspir)[i] + " Points" + "\n";
    }

    prim_aspir = prim_aspir.toString();
    sec_aspir = sec_aspir.toString();

    prim_aspir = prim_aspir.replace(/,\d+/g, '');
    sec_aspir = sec_aspir.replace(/,\d+/g, '');
    let jeal_text = "Jealousy Level: " + jealousy(prim_aspir, sec_aspir) + "\n\n" + "Remember that everything here is fully optional." + "\n" + "Feel free to choose whatever sounds most fun to you!";

    document.getElementById("results").style.display = "block";

    document.getElementById("primary-aspir").textContent = `Primary Aspiration: ${prim_aspir}`;
    document.getElementById("primary-aspir").style.opacity = 1;

    document.getElementById("secondary-aspir").textContent = `Secondary Aspiration: ${sec_aspir}`;
    document.getElementById("secondary-aspir").style.opacity = 1;

    document.getElementById("jealousy-level").textContent = `${jeal_text}`;

    document.getElementById("aspiration-list").textContent = `${aspir_list}`;
}

function clearEverything() {
    // Clearing stuff
    document.getElementById("primary-aspir").textContent = '';
    document.getElementById("secondary-aspir").textContent = '';
    document.getElementById("aspiration-list").textContent = '';
    document.getElementById("jealousy-level").textContent = '';
    document.getElementById("results").style.display = "none";

    // Resetting all buttons back to default
        // Parent Aspirations -- Section 1
    $('#parent1').val('Yes');
    $('#primary1').val('Family');
    $('#secondary1').val('Fortune');
        // Parent Aspirations -- Section 2
    $('#parent2').val('Yes');
    $('#primary2').val('Family');
    $('#secondary2').val('Fortune');
        // Making the div blocks visible
    document.getElementById('family-aspir1').style.display = 'block';
    document.getElementById('family-aspir2').style.display = 'block';

        // Personality
    $('#sloppy-neat').val('5');
    $('#shy-outgoing').val('5');
    $('#lazy-active').val('5');
    $('#serious-playful').val('5');
    $('#grouchy-nice').val('5');

        // Zodiac Sign
    $('#zodiac').val('default');

        // Interests
    $('#high_inter').val('default');
    $('#sec_high_inter').val('default');
    $('#low_inter').val('default');
}
