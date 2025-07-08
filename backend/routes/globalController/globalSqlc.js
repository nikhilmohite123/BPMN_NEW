const speakupquery = (req) => {
    const {
        s_speak_type, s_disclosed_type, s_first_name, s_last_name, s_speak_mail,
        s_group_names, s_region, n_location_id, s_speak_cat, s_sub_cat,
        s_subject_desc, s_situation_desc, s_insicident_desc, s_suggetion_desc,
        s_WWRM_suggestion, s_WWRM_codeOfConductG, s_WWRM_gravience, s_WWRM_sexualHarrasment,
        s_created_by, s_MailTo
    } = req.body;

    return {
        queryString: `CALL speakUp(?,?,?,?,?, ?,?,?,?,? ,?,?,?,?,? ,?,?,?,?,?,@LID)`,
        arr: [
            s_speak_type, s_disclosed_type, s_first_name, s_last_name, s_speak_mail,
            s_group_names, s_region, n_location_id, s_speak_cat, s_sub_cat,
            s_subject_desc, s_situation_desc, s_insicident_desc, s_suggetion_desc,
            s_WWRM_suggestion, s_WWRM_codeOfConductG, s_WWRM_gravience, s_WWRM_sexualHarrasment,
            s_created_by, s_MailTo
        ]
    };
};



export { speakupquery };
